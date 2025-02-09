// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file resource/definitions/extensions/extensions.proto (package talos.resource.definitions.extensions, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file resource/definitions/extensions/extensions.proto.
 */
export const file_resource_definitions_extensions_extensions: GenFile = /*@__PURE__*/
  fileDesc("CjByZXNvdXJjZS9kZWZpbml0aW9ucy9leHRlbnNpb25zL2V4dGVuc2lvbnMucHJvdG8SJXRhbG9zLnJlc291cmNlLmRlZmluaXRpb25zLmV4dGVuc2lvbnMiUQoNQ29tcGF0aWJpbGl0eRJACgV0YWxvcxgBIAEoCzIxLnRhbG9zLnJlc291cmNlLmRlZmluaXRpb25zLmV4dGVuc2lvbnMuQ29uc3RyYWludCIdCgpDb25zdHJhaW50Eg8KB3ZlcnNpb24YASABKAkiWQoFTGF5ZXISDQoFaW1hZ2UYASABKAkSQQoIbWV0YWRhdGEYAiABKAsyLy50YWxvcy5yZXNvdXJjZS5kZWZpbml0aW9ucy5leHRlbnNpb25zLk1ldGFkYXRhIq8BCghNZXRhZGF0YRIMCgRuYW1lGAEgASgJEg8KB3ZlcnNpb24YAiABKAkSDgoGYXV0aG9yGAMgASgJEhMKC2Rlc2NyaXB0aW9uGAQgASgJEksKDWNvbXBhdGliaWxpdHkYBSABKAsyNC50YWxvcy5yZXNvdXJjZS5kZWZpbml0aW9ucy5leHRlbnNpb25zLkNvbXBhdGliaWxpdHkSEgoKZXh0cmFfaW5mbxgGIAEoCUJ+Ci1kZXYudGFsb3MuYXBpLnJlc291cmNlLmRlZmluaXRpb25zLmV4dGVuc2lvbnNaTWdpdGh1Yi5jb20vc2lkZXJvbGFicy90YWxvcy9wa2cvbWFjaGluZXJ5L2FwaS9yZXNvdXJjZS9kZWZpbml0aW9ucy9leHRlbnNpb25zYgZwcm90bzM");

/**
 * Compatibility describes extension compatibility.
 *
 * @generated from message talos.resource.definitions.extensions.Compatibility
 */
export type Compatibility = Message<"talos.resource.definitions.extensions.Compatibility"> & {
  /**
   * @generated from field: talos.resource.definitions.extensions.Constraint talos = 1;
   */
  talos?: Constraint;
};

/**
 * Describes the message talos.resource.definitions.extensions.Compatibility.
 * Use `create(CompatibilitySchema)` to create a new message.
 */
export const CompatibilitySchema: GenMessage<Compatibility> = /*@__PURE__*/
  messageDesc(file_resource_definitions_extensions_extensions, 0);

/**
 * Constraint describes compatibility constraint.
 *
 * @generated from message talos.resource.definitions.extensions.Constraint
 */
export type Constraint = Message<"talos.resource.definitions.extensions.Constraint"> & {
  /**
   * @generated from field: string version = 1;
   */
  version: string;
};

/**
 * Describes the message talos.resource.definitions.extensions.Constraint.
 * Use `create(ConstraintSchema)` to create a new message.
 */
export const ConstraintSchema: GenMessage<Constraint> = /*@__PURE__*/
  messageDesc(file_resource_definitions_extensions_extensions, 1);

/**
 * Layer defines overlay mount layer.
 *
 * @generated from message talos.resource.definitions.extensions.Layer
 */
export type Layer = Message<"talos.resource.definitions.extensions.Layer"> & {
  /**
   * @generated from field: string image = 1;
   */
  image: string;

  /**
   * @generated from field: talos.resource.definitions.extensions.Metadata metadata = 2;
   */
  metadata?: Metadata;
};

/**
 * Describes the message talos.resource.definitions.extensions.Layer.
 * Use `create(LayerSchema)` to create a new message.
 */
export const LayerSchema: GenMessage<Layer> = /*@__PURE__*/
  messageDesc(file_resource_definitions_extensions_extensions, 2);

/**
 * Metadata describes base extension metadata.
 *
 * @generated from message talos.resource.definitions.extensions.Metadata
 */
export type Metadata = Message<"talos.resource.definitions.extensions.Metadata"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string version = 2;
   */
  version: string;

  /**
   * @generated from field: string author = 3;
   */
  author: string;

  /**
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * @generated from field: talos.resource.definitions.extensions.Compatibility compatibility = 5;
   */
  compatibility?: Compatibility;

  /**
   * @generated from field: string extra_info = 6;
   */
  extraInfo: string;
};

/**
 * Describes the message talos.resource.definitions.extensions.Metadata.
 * Use `create(MetadataSchema)` to create a new message.
 */
export const MetadataSchema: GenMessage<Metadata> = /*@__PURE__*/
  messageDesc(file_resource_definitions_extensions_extensions, 3);

