import { readFileSync } from 'node:fs'
import { createClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'
import type { DescService } from '@bufbuild/protobuf'
import { parseYAML } from 'confbox'

type TalosConfigFile = {
  /** Current context */
  context: string
  contexts: {
    [x: string]: {
      endpoints: Array<string>
      /** Base64 string of ca cert */
      ca: string
      /** Base64 string of crt */
      crt: string
      /** Base64 string of key */
      key: string
    }
  }
}

export const useTalosClient = <T extends DescService>(service: T) => {
  // load secrets file from mounted folder
  const file = readFileSync('.' + useRuntimeConfig().talosConfigPath + '/' + useRuntimeConfig().talosConfigName)
  const talosConfig = parseYAML<TalosConfigFile>(file.toString())

  // format certs from Base64 to string
  const currentContext = talosConfig.contexts[talosConfig.context]
  const caString = Buffer.from(currentContext.ca, 'base64').toString()
  const certString = Buffer.from(currentContext.crt, 'base64').toString()
  const keyString = Buffer.from(currentContext.key, 'base64').toString().replaceAll('ED25519 ', '')

  // create grpc transport
  const transport = createGrpcTransport({
    baseUrl: useRuntimeConfig().talosApiUrl,
    nodeOptions: {
      ca: caString,
      cert: certString,
      key: keyString,
      servername: 'talos', // Because of - DeprecationWarning: Setting the TLS ServerName to an IP address is not permitted by RFC 6066.
    },
  })
  return createClient<T>(service, transport)
}
