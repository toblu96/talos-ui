// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file resource/definitions/etcd/etcd.proto (package talos.resource.definitions.etcd, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { NetIP } from "../../../common/common_pb";
import { file_common_common } from "../../../common/common_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file resource/definitions/etcd/etcd.proto.
 */
export const file_resource_definitions_etcd_etcd: GenFile = /*@__PURE__*/
  fileDesc("CiRyZXNvdXJjZS9kZWZpbml0aW9ucy9ldGNkL2V0Y2QucHJvdG8SH3RhbG9zLnJlc291cmNlLmRlZmluaXRpb25zLmV0Y2QinwIKCkNvbmZpZ1NwZWMSHwoXYWR2ZXJ0aXNlX3ZhbGlkX3N1Ym5ldHMYASADKAkSIQoZYWR2ZXJ0aXNlX2V4Y2x1ZGVfc3VibmV0cxgCIAMoCRINCgVpbWFnZRgDIAEoCRJOCgpleHRyYV9hcmdzGAQgAygLMjoudGFsb3MucmVzb3VyY2UuZGVmaW5pdGlvbnMuZXRjZC5Db25maWdTcGVjLkV4dHJhQXJnc0VudHJ5EhwKFGxpc3Rlbl92YWxpZF9zdWJuZXRzGAUgAygJEh4KFmxpc3Rlbl9leGNsdWRlX3N1Ym5ldHMYBiADKAkaMAoORXh0cmFBcmdzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ASIfCgpNZW1iZXJTcGVjEhEKCW1lbWJlcl9pZBgBIAEoCSIvCg1QS0lTdGF0dXNTcGVjEg0KBXJlYWR5GAEgASgIEg8KB3ZlcnNpb24YAiABKAkisgIKCFNwZWNTcGVjEgwKBG5hbWUYASABKAkSKwoUYWR2ZXJ0aXNlZF9hZGRyZXNzZXMYAiADKAsyDS5jb21tb24uTmV0SVASDQoFaW1hZ2UYAyABKAkSTAoKZXh0cmFfYXJncxgEIAMoCzI4LnRhbG9zLnJlc291cmNlLmRlZmluaXRpb25zLmV0Y2QuU3BlY1NwZWMuRXh0cmFBcmdzRW50cnkSLAoVbGlzdGVuX3BlZXJfYWRkcmVzc2VzGAUgAygLMg0uY29tbW9uLk5ldElQEi4KF2xpc3Rlbl9jbGllbnRfYWRkcmVzc2VzGAYgAygLMg0uY29tbW9uLk5ldElQGjAKDkV4dHJhQXJnc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAFCcgonZGV2LnRhbG9zLmFwaS5yZXNvdXJjZS5kZWZpbml0aW9ucy5ldGNkWkdnaXRodWIuY29tL3NpZGVyb2xhYnMvdGFsb3MvcGtnL21hY2hpbmVyeS9hcGkvcmVzb3VyY2UvZGVmaW5pdGlvbnMvZXRjZGIGcHJvdG8z", [file_common_common]);

/**
 * ConfigSpec describes (some) configuration settings of etcd.
 *
 * @generated from message talos.resource.definitions.etcd.ConfigSpec
 */
export type ConfigSpec = Message<"talos.resource.definitions.etcd.ConfigSpec"> & {
  /**
   * @generated from field: repeated string advertise_valid_subnets = 1;
   */
  advertiseValidSubnets: string[];

  /**
   * @generated from field: repeated string advertise_exclude_subnets = 2;
   */
  advertiseExcludeSubnets: string[];

  /**
   * @generated from field: string image = 3;
   */
  image: string;

  /**
   * @generated from field: map<string, string> extra_args = 4;
   */
  extraArgs: { [key: string]: string };

  /**
   * @generated from field: repeated string listen_valid_subnets = 5;
   */
  listenValidSubnets: string[];

  /**
   * @generated from field: repeated string listen_exclude_subnets = 6;
   */
  listenExcludeSubnets: string[];
};

/**
 * Describes the message talos.resource.definitions.etcd.ConfigSpec.
 * Use `create(ConfigSpecSchema)` to create a new message.
 */
export const ConfigSpecSchema: GenMessage<ConfigSpec> = /*@__PURE__*/
  messageDesc(file_resource_definitions_etcd_etcd, 0);

/**
 * MemberSpec holds information about an etcd member.
 *
 * @generated from message talos.resource.definitions.etcd.MemberSpec
 */
export type MemberSpec = Message<"talos.resource.definitions.etcd.MemberSpec"> & {
  /**
   * @generated from field: string member_id = 1;
   */
  memberId: string;
};

/**
 * Describes the message talos.resource.definitions.etcd.MemberSpec.
 * Use `create(MemberSpecSchema)` to create a new message.
 */
export const MemberSpecSchema: GenMessage<MemberSpec> = /*@__PURE__*/
  messageDesc(file_resource_definitions_etcd_etcd, 1);

/**
 * PKIStatusSpec describes status of rendered secrets.
 *
 * @generated from message talos.resource.definitions.etcd.PKIStatusSpec
 */
export type PKIStatusSpec = Message<"talos.resource.definitions.etcd.PKIStatusSpec"> & {
  /**
   * @generated from field: bool ready = 1;
   */
  ready: boolean;

  /**
   * @generated from field: string version = 2;
   */
  version: string;
};

/**
 * Describes the message talos.resource.definitions.etcd.PKIStatusSpec.
 * Use `create(PKIStatusSpecSchema)` to create a new message.
 */
export const PKIStatusSpecSchema: GenMessage<PKIStatusSpec> = /*@__PURE__*/
  messageDesc(file_resource_definitions_etcd_etcd, 2);

/**
 * SpecSpec describes (some) Specuration settings of etcd.
 *
 * @generated from message talos.resource.definitions.etcd.SpecSpec
 */
export type SpecSpec = Message<"talos.resource.definitions.etcd.SpecSpec"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: repeated common.NetIP advertised_addresses = 2;
   */
  advertisedAddresses: NetIP[];

  /**
   * @generated from field: string image = 3;
   */
  image: string;

  /**
   * @generated from field: map<string, string> extra_args = 4;
   */
  extraArgs: { [key: string]: string };

  /**
   * @generated from field: repeated common.NetIP listen_peer_addresses = 5;
   */
  listenPeerAddresses: NetIP[];

  /**
   * @generated from field: repeated common.NetIP listen_client_addresses = 6;
   */
  listenClientAddresses: NetIP[];
};

/**
 * Describes the message talos.resource.definitions.etcd.SpecSpec.
 * Use `create(SpecSpecSchema)` to create a new message.
 */
export const SpecSpecSchema: GenMessage<SpecSpec> = /*@__PURE__*/
  messageDesc(file_resource_definitions_etcd_etcd, 3);

