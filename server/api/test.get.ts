
import { MachineService } from "@/server/talos/machine/machine_pb";
import { ClusterService } from "@/server/talos/cluster/cluster_pb";



export default defineEventHandler(async event => {

    // grpc call example
    const machineClient = useTalosClient(MachineService)
    const process = await machineClient.version({})

    // grpc stream example
    const client = useTalosClient(ClusterService)
    const logs = client.healthCheck({ waitTimeout: { seconds: BigInt(10) } }, { timeoutMs: 10000 });

    let logStrings: Array<string> = [];
    for await (const log of logs) {
        logStrings.push(log.message)
    }

    return {
        talosVersion: process.messages.at(0)?.version?.tag,
        logs: logStrings
    }
})