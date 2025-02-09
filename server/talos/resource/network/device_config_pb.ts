// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file resource/network/device_config.proto (package resource.network, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file resource/network/device_config.proto.
 */
export const file_resource_network_device_config: GenFile = /*@__PURE__*/
  fileDesc("CiRyZXNvdXJjZS9uZXR3b3JrL2RldmljZV9jb25maWcucHJvdG8SEHJlc291cmNlLm5ldHdvcmsiLwoURGV2aWNlQ29uZmlnU3BlY1NwZWMSFwoPeWFtbF9tYXJzaGFsbGVkGAEgASgMQmAKHmRldi50YWxvcy5hcGkucmVzb3VyY2UubmV0d29ya1o+Z2l0aHViLmNvbS9zaWRlcm9sYWJzL3RhbG9zL3BrZy9tYWNoaW5lcnkvYXBpL3Jlc291cmNlL25ldHdvcmtiBnByb3RvMw");

/**
 * DeviceConfigSpecSpec is the spec for the network.DeviceConfigSpec resource.
 *
 * @generated from message resource.network.DeviceConfigSpecSpec
 */
export type DeviceConfigSpecSpec = Message<"resource.network.DeviceConfigSpecSpec"> & {
  /**
   * Contains YAML marshalled device config (as part of the machine config).
   *
   * @generated from field: bytes yaml_marshalled = 1;
   */
  yamlMarshalled: Uint8Array;
};

/**
 * Describes the message resource.network.DeviceConfigSpecSpec.
 * Use `create(DeviceConfigSpecSpecSchema)` to create a new message.
 */
export const DeviceConfigSpecSpecSchema: GenMessage<DeviceConfigSpecSpec> = /*@__PURE__*/
  messageDesc(file_resource_network_device_config, 0);

