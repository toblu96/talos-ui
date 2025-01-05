// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file resource/definitions/hardware/hardware.proto (package talos.resource.definitions.hardware, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file resource/definitions/hardware/hardware.proto.
 */
export const file_resource_definitions_hardware_hardware: GenFile = /*@__PURE__*/
  fileDesc("CixyZXNvdXJjZS9kZWZpbml0aW9ucy9oYXJkd2FyZS9oYXJkd2FyZS5wcm90bxIjdGFsb3MucmVzb3VyY2UuZGVmaW5pdGlvbnMuaGFyZHdhcmUiswEKEE1lbW9yeU1vZHVsZVNwZWMSDAoEc2l6ZRgBIAEoDRIWCg5kZXZpY2VfbG9jYXRvchgCIAEoCRIUCgxiYW5rX2xvY2F0b3IYAyABKAkSDQoFc3BlZWQYBCABKA0SFAoMbWFudWZhY3R1cmVyGAUgASgJEhUKDXNlcmlhbF9udW1iZXIYBiABKAkSEQoJYXNzZXRfdGFnGAcgASgJEhQKDHByb2R1Y3RfbmFtZRgIIAEoCSKfAQoNUENJRGV2aWNlU3BlYxINCgVjbGFzcxgBIAEoCRIQCghzdWJjbGFzcxgCIAEoCRIOCgZ2ZW5kb3IYAyABKAkSDwoHcHJvZHVjdBgEIAEoCRIQCghjbGFzc19pZBgFIAEoCRITCgtzdWJjbGFzc19pZBgGIAEoCRIRCgl2ZW5kb3JfaWQYByABKAkSEgoKcHJvZHVjdF9pZBgIIAEoCSJBChlQQ0lEcml2ZXJSZWJpbmRDb25maWdTcGVjEg0KBXBjaWlkGAEgASgJEhUKDXRhcmdldF9kcml2ZXIYAiABKAkiQQoZUENJRHJpdmVyUmViaW5kU3RhdHVzU3BlYxINCgVwY2lpZBgBIAEoCRIVCg10YXJnZXRfZHJpdmVyGAIgASgJIoECCg1Qcm9jZXNzb3JTcGVjEg4KBnNvY2tldBgBIAEoCRIUCgxtYW51ZmFjdHVyZXIYAiABKAkSFAoMcHJvZHVjdF9uYW1lGAMgASgJEhEKCW1heF9zcGVlZBgEIAEoDRISCgpib290X3NwZWVkGAUgASgNEg4KBnN0YXR1cxgGIAEoDRIVCg1zZXJpYWxfbnVtYmVyGAcgASgJEhEKCWFzc2V0X3RhZxgIIAEoCRITCgtwYXJ0X251bWJlchgJIAEoCRISCgpjb3JlX2NvdW50GAogASgNEhQKDGNvcmVfZW5hYmxlZBgLIAEoDRIUCgx0aHJlYWRfY291bnQYDCABKA0iowEKFVN5c3RlbUluZm9ybWF0aW9uU3BlYxIUCgxtYW51ZmFjdHVyZXIYASABKAkSFAoMcHJvZHVjdF9uYW1lGAIgASgJEg8KB3ZlcnNpb24YAyABKAkSFQoNc2VyaWFsX251bWJlchgEIAEoCRIMCgR1dWlkGAUgASgJEhQKDHdha2VfdXBfdHlwZRgGIAEoCRISCgpza3VfbnVtYmVyGAcgASgJQnoKK2Rldi50YWxvcy5hcGkucmVzb3VyY2UuZGVmaW5pdGlvbnMuaGFyZHdhcmVaS2dpdGh1Yi5jb20vc2lkZXJvbGFicy90YWxvcy9wa2cvbWFjaGluZXJ5L2FwaS9yZXNvdXJjZS9kZWZpbml0aW9ucy9oYXJkd2FyZWIGcHJvdG8z");

/**
 * MemoryModuleSpec represents a single Memory.
 *
 * @generated from message talos.resource.definitions.hardware.MemoryModuleSpec
 */
export type MemoryModuleSpec = Message<"talos.resource.definitions.hardware.MemoryModuleSpec"> & {
  /**
   * @generated from field: uint32 size = 1;
   */
  size: number;

  /**
   * @generated from field: string device_locator = 2;
   */
  deviceLocator: string;

  /**
   * @generated from field: string bank_locator = 3;
   */
  bankLocator: string;

  /**
   * @generated from field: uint32 speed = 4;
   */
  speed: number;

  /**
   * @generated from field: string manufacturer = 5;
   */
  manufacturer: string;

  /**
   * @generated from field: string serial_number = 6;
   */
  serialNumber: string;

  /**
   * @generated from field: string asset_tag = 7;
   */
  assetTag: string;

  /**
   * @generated from field: string product_name = 8;
   */
  productName: string;
};

/**
 * Describes the message talos.resource.definitions.hardware.MemoryModuleSpec.
 * Use `create(MemoryModuleSpecSchema)` to create a new message.
 */
export const MemoryModuleSpecSchema: GenMessage<MemoryModuleSpec> = /*@__PURE__*/
  messageDesc(file_resource_definitions_hardware_hardware, 0);

/**
 * PCIDeviceSpec represents a single processor.
 *
 * @generated from message talos.resource.definitions.hardware.PCIDeviceSpec
 */
export type PCIDeviceSpec = Message<"talos.resource.definitions.hardware.PCIDeviceSpec"> & {
  /**
   * @generated from field: string class = 1;
   */
  class: string;

  /**
   * @generated from field: string subclass = 2;
   */
  subclass: string;

  /**
   * @generated from field: string vendor = 3;
   */
  vendor: string;

  /**
   * @generated from field: string product = 4;
   */
  product: string;

  /**
   * @generated from field: string class_id = 5;
   */
  classId: string;

  /**
   * @generated from field: string subclass_id = 6;
   */
  subclassId: string;

  /**
   * @generated from field: string vendor_id = 7;
   */
  vendorId: string;

  /**
   * @generated from field: string product_id = 8;
   */
  productId: string;
};

/**
 * Describes the message talos.resource.definitions.hardware.PCIDeviceSpec.
 * Use `create(PCIDeviceSpecSchema)` to create a new message.
 */
export const PCIDeviceSpecSchema: GenMessage<PCIDeviceSpec> = /*@__PURE__*/
  messageDesc(file_resource_definitions_hardware_hardware, 1);

/**
 * PCIDriverRebindConfigSpec describes PCI rebind configuration.
 *
 * @generated from message talos.resource.definitions.hardware.PCIDriverRebindConfigSpec
 */
export type PCIDriverRebindConfigSpec = Message<"talos.resource.definitions.hardware.PCIDriverRebindConfigSpec"> & {
  /**
   * @generated from field: string pciid = 1;
   */
  pciid: string;

  /**
   * @generated from field: string target_driver = 2;
   */
  targetDriver: string;
};

/**
 * Describes the message talos.resource.definitions.hardware.PCIDriverRebindConfigSpec.
 * Use `create(PCIDriverRebindConfigSpecSchema)` to create a new message.
 */
export const PCIDriverRebindConfigSpecSchema: GenMessage<PCIDriverRebindConfigSpec> = /*@__PURE__*/
  messageDesc(file_resource_definitions_hardware_hardware, 2);

/**
 * PCIDriverRebindStatusSpec describes status of rebinded drivers.
 *
 * @generated from message talos.resource.definitions.hardware.PCIDriverRebindStatusSpec
 */
export type PCIDriverRebindStatusSpec = Message<"talos.resource.definitions.hardware.PCIDriverRebindStatusSpec"> & {
  /**
   * @generated from field: string pciid = 1;
   */
  pciid: string;

  /**
   * @generated from field: string target_driver = 2;
   */
  targetDriver: string;
};

/**
 * Describes the message talos.resource.definitions.hardware.PCIDriverRebindStatusSpec.
 * Use `create(PCIDriverRebindStatusSpecSchema)` to create a new message.
 */
export const PCIDriverRebindStatusSpecSchema: GenMessage<PCIDriverRebindStatusSpec> = /*@__PURE__*/
  messageDesc(file_resource_definitions_hardware_hardware, 3);

/**
 * ProcessorSpec represents a single processor.
 *
 * @generated from message talos.resource.definitions.hardware.ProcessorSpec
 */
export type ProcessorSpec = Message<"talos.resource.definitions.hardware.ProcessorSpec"> & {
  /**
   * @generated from field: string socket = 1;
   */
  socket: string;

  /**
   * @generated from field: string manufacturer = 2;
   */
  manufacturer: string;

  /**
   * @generated from field: string product_name = 3;
   */
  productName: string;

  /**
   * @generated from field: uint32 max_speed = 4;
   */
  maxSpeed: number;

  /**
   * @generated from field: uint32 boot_speed = 5;
   */
  bootSpeed: number;

  /**
   * @generated from field: uint32 status = 6;
   */
  status: number;

  /**
   * @generated from field: string serial_number = 7;
   */
  serialNumber: string;

  /**
   * @generated from field: string asset_tag = 8;
   */
  assetTag: string;

  /**
   * @generated from field: string part_number = 9;
   */
  partNumber: string;

  /**
   * @generated from field: uint32 core_count = 10;
   */
  coreCount: number;

  /**
   * @generated from field: uint32 core_enabled = 11;
   */
  coreEnabled: number;

  /**
   * @generated from field: uint32 thread_count = 12;
   */
  threadCount: number;
};

/**
 * Describes the message talos.resource.definitions.hardware.ProcessorSpec.
 * Use `create(ProcessorSpecSchema)` to create a new message.
 */
export const ProcessorSpecSchema: GenMessage<ProcessorSpec> = /*@__PURE__*/
  messageDesc(file_resource_definitions_hardware_hardware, 4);

/**
 * SystemInformationSpec represents the system information obtained from smbios.
 *
 * @generated from message talos.resource.definitions.hardware.SystemInformationSpec
 */
export type SystemInformationSpec = Message<"talos.resource.definitions.hardware.SystemInformationSpec"> & {
  /**
   * @generated from field: string manufacturer = 1;
   */
  manufacturer: string;

  /**
   * @generated from field: string product_name = 2;
   */
  productName: string;

  /**
   * @generated from field: string version = 3;
   */
  version: string;

  /**
   * @generated from field: string serial_number = 4;
   */
  serialNumber: string;

  /**
   * @generated from field: string uuid = 5;
   */
  uuid: string;

  /**
   * @generated from field: string wake_up_type = 6;
   */
  wakeUpType: string;

  /**
   * @generated from field: string sku_number = 7;
   */
  skuNumber: string;
};

/**
 * Describes the message talos.resource.definitions.hardware.SystemInformationSpec.
 * Use `create(SystemInformationSpecSchema)` to create a new message.
 */
export const SystemInformationSpecSchema: GenMessage<SystemInformationSpec> = /*@__PURE__*/
  messageDesc(file_resource_definitions_hardware_hardware, 5);

