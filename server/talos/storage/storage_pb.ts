// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file storage/storage.proto (package storage, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Metadata } from "../common/common_pb";
import { file_common_common } from "../common/common_pb";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file storage/storage.proto.
 */
export const file_storage_storage: GenFile = /*@__PURE__*/
  fileDesc("ChVzdG9yYWdlL3N0b3JhZ2UucHJvdG8SB3N0b3JhZ2UiuwIKBERpc2sSDAoEc2l6ZRgBIAEoBBINCgVtb2RlbBgCIAEoCRITCgtkZXZpY2VfbmFtZRgDIAEoCRIMCgRuYW1lGAQgASgJEg4KBnNlcmlhbBgFIAEoCRIQCghtb2RhbGlhcxgGIAEoCRIMCgR1dWlkGAcgASgJEgwKBHd3aWQYCCABKAkSJAoEdHlwZRgJIAEoDjIWLnN0b3JhZ2UuRGlzay5EaXNrVHlwZRIQCghidXNfcGF0aBgKIAEoCRITCgtzeXN0ZW1fZGlzaxgLIAEoCBIRCglzdWJzeXN0ZW0YDCABKAkSEAoIcmVhZG9ubHkYDSABKAgiQwoIRGlza1R5cGUSCwoHVU5LTk9XThAAEgcKA1NTRBABEgcKA0hERBACEggKBE5WTUUQAxIGCgJTRBAEEgYKAkNEEAUiSQoFRGlza3MSIgoIbWV0YWRhdGEYASABKAsyEC5jb21tb24uTWV0YWRhdGESHAoFZGlza3MYAiADKAsyDS5zdG9yYWdlLkRpc2siMQoNRGlza3NSZXNwb25zZRIgCghtZXNzYWdlcxgBIAMoCzIOLnN0b3JhZ2UuRGlza3MiTQoWQmxvY2tEZXZpY2VXaXBlUmVxdWVzdBIzCgdkZXZpY2VzGAEgAygLMiIuc3RvcmFnZS5CbG9ja0RldmljZVdpcGVEZXNjcmlwdG9yIqEBChlCbG9ja0RldmljZVdpcGVEZXNjcmlwdG9yEg4KBmRldmljZRgBIAEoCRI5CgZtZXRob2QYAiABKA4yKS5zdG9yYWdlLkJsb2NrRGV2aWNlV2lwZURlc2NyaXB0b3IuTWV0aG9kEhkKEXNraXBfdm9sdW1lX2NoZWNrGAMgASgIIh4KBk1ldGhvZBIICgRGQVNUEAASCgoGWkVST0VTEAEiRQoXQmxvY2tEZXZpY2VXaXBlUmVzcG9uc2USKgoIbWVzc2FnZXMYASADKAsyGC5zdG9yYWdlLkJsb2NrRGV2aWNlV2lwZSI1Cg9CbG9ja0RldmljZVdpcGUSIgoIbWV0YWRhdGEYASABKAsyEC5jb21tb24uTWV0YWRhdGEynwEKDlN0b3JhZ2VTZXJ2aWNlEjcKBURpc2tzEhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GhYuc3RvcmFnZS5EaXNrc1Jlc3BvbnNlElQKD0Jsb2NrRGV2aWNlV2lwZRIfLnN0b3JhZ2UuQmxvY2tEZXZpY2VXaXBlUmVxdWVzdBogLnN0b3JhZ2UuQmxvY2tEZXZpY2VXaXBlUmVzcG9uc2VCTgoVZGV2LnRhbG9zLmFwaS5zdG9yYWdlWjVnaXRodWIuY29tL3NpZGVyb2xhYnMvdGFsb3MvcGtnL21hY2hpbmVyeS9hcGkvc3RvcmFnZWIGcHJvdG8z", [file_common_common, file_google_protobuf_empty]);

/**
 * Disk represents a disk.
 *
 * @generated from message storage.Disk
 */
export type Disk = Message<"storage.Disk"> & {
  /**
   * Size indicates the disk size in bytes.
   *
   * @generated from field: uint64 size = 1;
   */
  size: bigint;

  /**
   * Model idicates the disk model.
   *
   * @generated from field: string model = 2;
   */
  model: string;

  /**
   * DeviceName indicates the disk name (e.g. `sda`).
   *
   * @generated from field: string device_name = 3;
   */
  deviceName: string;

  /**
   * Name as in `/sys/block/<dev>/device/name`.
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * Serial as in `/sys/block/<dev>/device/serial`.
   *
   * @generated from field: string serial = 5;
   */
  serial: string;

  /**
   * Modalias as in `/sys/block/<dev>/device/modalias`.
   *
   * @generated from field: string modalias = 6;
   */
  modalias: string;

  /**
   * Uuid as in `/sys/block/<dev>/device/uuid`.
   *
   * @generated from field: string uuid = 7;
   */
  uuid: string;

  /**
   * Wwid as in `/sys/block/<dev>/device/wwid`.
   *
   * @generated from field: string wwid = 8;
   */
  wwid: string;

  /**
   * Type is a type of the disk: nvme, ssd, hdd, sd card.
   *
   * @generated from field: storage.Disk.DiskType type = 9;
   */
  type: Disk_DiskType;

  /**
   * BusPath is the bus path of the disk.
   *
   * @generated from field: string bus_path = 10;
   */
  busPath: string;

  /**
   * SystemDisk indicates that the disk is used as Talos system disk.
   *
   * @generated from field: bool system_disk = 11;
   */
  systemDisk: boolean;

  /**
   * Subsystem is the symlink path in the `/sys/block/<dev>/subsystem`.
   *
   * @generated from field: string subsystem = 12;
   */
  subsystem: string;

  /**
   * Readonly specifies if the disk is read only.
   *
   * @generated from field: bool readonly = 13;
   */
  readonly: boolean;
};

/**
 * Describes the message storage.Disk.
 * Use `create(DiskSchema)` to create a new message.
 */
export const DiskSchema: GenMessage<Disk> = /*@__PURE__*/
  messageDesc(file_storage_storage, 0);

/**
 * @generated from enum storage.Disk.DiskType
 */
export enum Disk_DiskType {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: SSD = 1;
   */
  SSD = 1,

  /**
   * @generated from enum value: HDD = 2;
   */
  HDD = 2,

  /**
   * @generated from enum value: NVME = 3;
   */
  NVME = 3,

  /**
   * @generated from enum value: SD = 4;
   */
  SD = 4,

  /**
   * @generated from enum value: CD = 5;
   */
  CD = 5,
}

/**
 * Describes the enum storage.Disk.DiskType.
 */
export const Disk_DiskTypeSchema: GenEnum<Disk_DiskType> = /*@__PURE__*/
  enumDesc(file_storage_storage, 0, 0);

/**
 * DisksResponse represents the response of the `Disks` RPC.
 *
 * @generated from message storage.Disks
 */
export type Disks = Message<"storage.Disks"> & {
  /**
   * @generated from field: common.Metadata metadata = 1;
   */
  metadata?: Metadata;

  /**
   * @generated from field: repeated storage.Disk disks = 2;
   */
  disks: Disk[];
};

/**
 * Describes the message storage.Disks.
 * Use `create(DisksSchema)` to create a new message.
 */
export const DisksSchema: GenMessage<Disks> = /*@__PURE__*/
  messageDesc(file_storage_storage, 1);

/**
 * @generated from message storage.DisksResponse
 */
export type DisksResponse = Message<"storage.DisksResponse"> & {
  /**
   * @generated from field: repeated storage.Disks messages = 1;
   */
  messages: Disks[];
};

/**
 * Describes the message storage.DisksResponse.
 * Use `create(DisksResponseSchema)` to create a new message.
 */
export const DisksResponseSchema: GenMessage<DisksResponse> = /*@__PURE__*/
  messageDesc(file_storage_storage, 2);

/**
 * @generated from message storage.BlockDeviceWipeRequest
 */
export type BlockDeviceWipeRequest = Message<"storage.BlockDeviceWipeRequest"> & {
  /**
   * @generated from field: repeated storage.BlockDeviceWipeDescriptor devices = 1;
   */
  devices: BlockDeviceWipeDescriptor[];
};

/**
 * Describes the message storage.BlockDeviceWipeRequest.
 * Use `create(BlockDeviceWipeRequestSchema)` to create a new message.
 */
export const BlockDeviceWipeRequestSchema: GenMessage<BlockDeviceWipeRequest> = /*@__PURE__*/
  messageDesc(file_storage_storage, 3);

/**
 * BlockDeviceWipeDescriptor represents a single block device to be wiped.
 *
 * The device can be either a full disk (e.g. vda) or a partition (vda5).
 * The device should not be used in any of active volumes.
 * The device should not be used as a secondary (e.g. part of LVM).
 *
 * @generated from message storage.BlockDeviceWipeDescriptor
 */
export type BlockDeviceWipeDescriptor = Message<"storage.BlockDeviceWipeDescriptor"> & {
  /**
   * Device name to wipe (e.g. sda or sda5).
   *
   * The name should be submitted without `/dev/` prefix.
   *
   * @generated from field: string device = 1;
   */
  device: string;

  /**
   * Wipe method to use.
   *
   * @generated from field: storage.BlockDeviceWipeDescriptor.Method method = 2;
   */
  method: BlockDeviceWipeDescriptor_Method;

  /**
   * Skip the volume in use check.
   *
   * @generated from field: bool skip_volume_check = 3;
   */
  skipVolumeCheck: boolean;
};

/**
 * Describes the message storage.BlockDeviceWipeDescriptor.
 * Use `create(BlockDeviceWipeDescriptorSchema)` to create a new message.
 */
export const BlockDeviceWipeDescriptorSchema: GenMessage<BlockDeviceWipeDescriptor> = /*@__PURE__*/
  messageDesc(file_storage_storage, 4);

/**
 * @generated from enum storage.BlockDeviceWipeDescriptor.Method
 */
export enum BlockDeviceWipeDescriptor_Method {
  /**
   * Fast wipe - wipe only filesystem signatures.
   *
   * @generated from enum value: FAST = 0;
   */
  FAST = 0,

  /**
   * Zeroes wipe - wipe by overwriting with zeroes (might be slow depending on the disk size and available hardware features).
   *
   * @generated from enum value: ZEROES = 1;
   */
  ZEROES = 1,
}

/**
 * Describes the enum storage.BlockDeviceWipeDescriptor.Method.
 */
export const BlockDeviceWipeDescriptor_MethodSchema: GenEnum<BlockDeviceWipeDescriptor_Method> = /*@__PURE__*/
  enumDesc(file_storage_storage, 4, 0);

/**
 * @generated from message storage.BlockDeviceWipeResponse
 */
export type BlockDeviceWipeResponse = Message<"storage.BlockDeviceWipeResponse"> & {
  /**
   * @generated from field: repeated storage.BlockDeviceWipe messages = 1;
   */
  messages: BlockDeviceWipe[];
};

/**
 * Describes the message storage.BlockDeviceWipeResponse.
 * Use `create(BlockDeviceWipeResponseSchema)` to create a new message.
 */
export const BlockDeviceWipeResponseSchema: GenMessage<BlockDeviceWipeResponse> = /*@__PURE__*/
  messageDesc(file_storage_storage, 5);

/**
 * @generated from message storage.BlockDeviceWipe
 */
export type BlockDeviceWipe = Message<"storage.BlockDeviceWipe"> & {
  /**
   * @generated from field: common.Metadata metadata = 1;
   */
  metadata?: Metadata;
};

/**
 * Describes the message storage.BlockDeviceWipe.
 * Use `create(BlockDeviceWipeSchema)` to create a new message.
 */
export const BlockDeviceWipeSchema: GenMessage<BlockDeviceWipe> = /*@__PURE__*/
  messageDesc(file_storage_storage, 6);

/**
 * StorageService represents the storage service.
 *
 * @generated from service storage.StorageService
 */
export const StorageService: GenService<{
  /**
   * @generated from rpc storage.StorageService.Disks
   */
  disks: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof DisksResponseSchema;
  },
  /**
   * BlockDeviceWipe performs a wipe of the blockdevice (partition or disk).
   *
   * The method doesn't require a reboot, and it can only wipe blockdevices which are not
   * being used as volumes at the moment.
   * Wiping of volumes requires a different API.
   *
   * @generated from rpc storage.StorageService.BlockDeviceWipe
   */
  blockDeviceWipe: {
    methodKind: "unary";
    input: typeof BlockDeviceWipeRequestSchema;
    output: typeof BlockDeviceWipeResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_storage_storage, 0);

