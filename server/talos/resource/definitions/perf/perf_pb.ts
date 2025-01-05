// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file resource/definitions/perf/perf.proto (package talos.resource.definitions.perf, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file resource/definitions/perf/perf.proto.
 */
export const file_resource_definitions_perf_perf: GenFile = /*@__PURE__*/
  fileDesc("CiRyZXNvdXJjZS9kZWZpbml0aW9ucy9wZXJmL3BlcmYucHJvdG8SH3RhbG9zLnJlc291cmNlLmRlZmluaXRpb25zLnBlcmYijQIKB0NQVVNwZWMSNQoDY3B1GAEgAygLMigudGFsb3MucmVzb3VyY2UuZGVmaW5pdGlvbnMucGVyZi5DUFVTdGF0EjsKCWNwdV90b3RhbBgCIAEoCzIoLnRhbG9zLnJlc291cmNlLmRlZmluaXRpb25zLnBlcmYuQ1BVU3RhdBIRCglpcnFfdG90YWwYAyABKAQSGAoQY29udGV4dF9zd2l0Y2hlcxgEIAEoBBIXCg9wcm9jZXNzX2NyZWF0ZWQYBSABKAQSFwoPcHJvY2Vzc19ydW5uaW5nGAYgASgEEhcKD3Byb2Nlc3NfYmxvY2tlZBgHIAEoBBIWCg5zb2Z0X2lycV90b3RhbBgIIAEoBCKkAQoHQ1BVU3RhdBIMCgR1c2VyGAEgASgBEgwKBG5pY2UYAiABKAESDgoGc3lzdGVtGAMgASgBEgwKBGlkbGUYBCABKAESDgoGaW93YWl0GAUgASgBEgsKA2lycRgGIAEoARIQCghzb2Z0X2lycRgHIAEoARINCgVzdGVhbBgIIAEoARINCgVndWVzdBgJIAEoARISCgpndWVzdF9uaWNlGAogASgBIvcHCgpNZW1vcnlTcGVjEhEKCW1lbV90b3RhbBgBIAEoBBIQCghtZW1fdXNlZBgCIAEoBBIVCg1tZW1fYXZhaWxhYmxlGAMgASgEEg8KB2J1ZmZlcnMYBCABKAQSDgoGY2FjaGVkGAUgASgEEhMKC3N3YXBfY2FjaGVkGAYgASgEEg4KBmFjdGl2ZRgHIAEoBBIQCghpbmFjdGl2ZRgIIAEoBBITCgthY3RpdmVfYW5vbhgJIAEoBBIVCg1pbmFjdGl2ZV9hbm9uGAogASgEEhMKC2FjdGl2ZV9maWxlGAsgASgEEhUKDWluYWN0aXZlX2ZpbGUYDCABKAQSEwoLdW5ldmljdGFibGUYDSABKAQSDwoHbWxvY2tlZBgOIAEoBBISCgpzd2FwX3RvdGFsGA8gASgEEhEKCXN3YXBfZnJlZRgQIAEoBBINCgVkaXJ0eRgRIAEoBBIRCgl3cml0ZWJhY2sYEiABKAQSEgoKYW5vbl9wYWdlcxgTIAEoBBIOCgZtYXBwZWQYFCABKAQSDQoFc2htZW0YFSABKAQSDAoEc2xhYhgWIAEoBBIVCg1zX3JlY2xhaW1hYmxlGBcgASgEEhMKC3NfdW5yZWNsYWltGBggASgEEhQKDGtlcm5lbF9zdGFjaxgZIAEoBBITCgtwYWdlX3RhYmxlcxgaIAEoBBIUCgxuZl9zdW5zdGFibGUYGyABKAQSDgoGYm91bmNlGBwgASgEEhUKDXdyaXRlYmFja190bXAYHSABKAQSFAoMY29tbWl0X2xpbWl0GB4gASgEEhQKDGNvbW1pdHRlZF9hcxgfIAEoBBIVCg12bWFsbG9jX3RvdGFsGCAgASgEEhQKDHZtYWxsb2NfdXNlZBghIAEoBBIVCg12bWFsbG9jX2NodW5rGCIgASgEEhoKEmhhcmR3YXJlX2NvcnJ1cHRlZBgjIAEoBBIXCg9hbm9uX2h1Z2VfcGFnZXMYJCABKAQSGAoQc2htZW1faHVnZV9wYWdlcxglIAEoBBIYChBzaG1lbV9wbWRfbWFwcGVkGCYgASgEEhEKCWNtYV90b3RhbBgnIAEoBBIQCghjbWFfZnJlZRgoIAEoBBIYChBodWdlX3BhZ2VzX3RvdGFsGCkgASgEEhcKD2h1Z2VfcGFnZXNfZnJlZRgqIAEoBBIXCg9odWdlX3BhZ2VzX3JzdmQYKyABKAQSFwoPaHVnZV9wYWdlc19zdXJwGCwgASgEEhQKDGh1Z2VwYWdlc2l6ZRgtIAEoBBIUCgxkaXJlY3RfbWFwNGsYLiABKAQSFAoMZGlyZWN0X21hcDJtGC8gASgEEhQKDGRpcmVjdF9tYXAxZxgwIAEoBEJyCidkZXYudGFsb3MuYXBpLnJlc291cmNlLmRlZmluaXRpb25zLnBlcmZaR2dpdGh1Yi5jb20vc2lkZXJvbGFicy90YWxvcy9wa2cvbWFjaGluZXJ5L2FwaS9yZXNvdXJjZS9kZWZpbml0aW9ucy9wZXJmYgZwcm90bzM");

/**
 * CPUSpec represents the last CPU stats snapshot.
 *
 * @generated from message talos.resource.definitions.perf.CPUSpec
 */
export type CPUSpec = Message<"talos.resource.definitions.perf.CPUSpec"> & {
  /**
   * @generated from field: repeated talos.resource.definitions.perf.CPUStat cpu = 1;
   */
  cpu: CPUStat[];

  /**
   * @generated from field: talos.resource.definitions.perf.CPUStat cpu_total = 2;
   */
  cpuTotal?: CPUStat;

  /**
   * @generated from field: uint64 irq_total = 3;
   */
  irqTotal: bigint;

  /**
   * @generated from field: uint64 context_switches = 4;
   */
  contextSwitches: bigint;

  /**
   * @generated from field: uint64 process_created = 5;
   */
  processCreated: bigint;

  /**
   * @generated from field: uint64 process_running = 6;
   */
  processRunning: bigint;

  /**
   * @generated from field: uint64 process_blocked = 7;
   */
  processBlocked: bigint;

  /**
   * @generated from field: uint64 soft_irq_total = 8;
   */
  softIrqTotal: bigint;
};

/**
 * Describes the message talos.resource.definitions.perf.CPUSpec.
 * Use `create(CPUSpecSchema)` to create a new message.
 */
export const CPUSpecSchema: GenMessage<CPUSpec> = /*@__PURE__*/
  messageDesc(file_resource_definitions_perf_perf, 0);

/**
 * CPUStat represents a single cpu stat.
 *
 * @generated from message talos.resource.definitions.perf.CPUStat
 */
export type CPUStat = Message<"talos.resource.definitions.perf.CPUStat"> & {
  /**
   * @generated from field: double user = 1;
   */
  user: number;

  /**
   * @generated from field: double nice = 2;
   */
  nice: number;

  /**
   * @generated from field: double system = 3;
   */
  system: number;

  /**
   * @generated from field: double idle = 4;
   */
  idle: number;

  /**
   * @generated from field: double iowait = 5;
   */
  iowait: number;

  /**
   * @generated from field: double irq = 6;
   */
  irq: number;

  /**
   * @generated from field: double soft_irq = 7;
   */
  softIrq: number;

  /**
   * @generated from field: double steal = 8;
   */
  steal: number;

  /**
   * @generated from field: double guest = 9;
   */
  guest: number;

  /**
   * @generated from field: double guest_nice = 10;
   */
  guestNice: number;
};

/**
 * Describes the message talos.resource.definitions.perf.CPUStat.
 * Use `create(CPUStatSchema)` to create a new message.
 */
export const CPUStatSchema: GenMessage<CPUStat> = /*@__PURE__*/
  messageDesc(file_resource_definitions_perf_perf, 1);

/**
 * MemorySpec represents the last Memory stats snapshot.
 *
 * @generated from message talos.resource.definitions.perf.MemorySpec
 */
export type MemorySpec = Message<"talos.resource.definitions.perf.MemorySpec"> & {
  /**
   * @generated from field: uint64 mem_total = 1;
   */
  memTotal: bigint;

  /**
   * @generated from field: uint64 mem_used = 2;
   */
  memUsed: bigint;

  /**
   * @generated from field: uint64 mem_available = 3;
   */
  memAvailable: bigint;

  /**
   * @generated from field: uint64 buffers = 4;
   */
  buffers: bigint;

  /**
   * @generated from field: uint64 cached = 5;
   */
  cached: bigint;

  /**
   * @generated from field: uint64 swap_cached = 6;
   */
  swapCached: bigint;

  /**
   * @generated from field: uint64 active = 7;
   */
  active: bigint;

  /**
   * @generated from field: uint64 inactive = 8;
   */
  inactive: bigint;

  /**
   * @generated from field: uint64 active_anon = 9;
   */
  activeAnon: bigint;

  /**
   * @generated from field: uint64 inactive_anon = 10;
   */
  inactiveAnon: bigint;

  /**
   * @generated from field: uint64 active_file = 11;
   */
  activeFile: bigint;

  /**
   * @generated from field: uint64 inactive_file = 12;
   */
  inactiveFile: bigint;

  /**
   * @generated from field: uint64 unevictable = 13;
   */
  unevictable: bigint;

  /**
   * @generated from field: uint64 mlocked = 14;
   */
  mlocked: bigint;

  /**
   * @generated from field: uint64 swap_total = 15;
   */
  swapTotal: bigint;

  /**
   * @generated from field: uint64 swap_free = 16;
   */
  swapFree: bigint;

  /**
   * @generated from field: uint64 dirty = 17;
   */
  dirty: bigint;

  /**
   * @generated from field: uint64 writeback = 18;
   */
  writeback: bigint;

  /**
   * @generated from field: uint64 anon_pages = 19;
   */
  anonPages: bigint;

  /**
   * @generated from field: uint64 mapped = 20;
   */
  mapped: bigint;

  /**
   * @generated from field: uint64 shmem = 21;
   */
  shmem: bigint;

  /**
   * @generated from field: uint64 slab = 22;
   */
  slab: bigint;

  /**
   * @generated from field: uint64 s_reclaimable = 23;
   */
  sReclaimable: bigint;

  /**
   * @generated from field: uint64 s_unreclaim = 24;
   */
  sUnreclaim: bigint;

  /**
   * @generated from field: uint64 kernel_stack = 25;
   */
  kernelStack: bigint;

  /**
   * @generated from field: uint64 page_tables = 26;
   */
  pageTables: bigint;

  /**
   * @generated from field: uint64 nf_sunstable = 27;
   */
  nfSunstable: bigint;

  /**
   * @generated from field: uint64 bounce = 28;
   */
  bounce: bigint;

  /**
   * @generated from field: uint64 writeback_tmp = 29;
   */
  writebackTmp: bigint;

  /**
   * @generated from field: uint64 commit_limit = 30;
   */
  commitLimit: bigint;

  /**
   * @generated from field: uint64 committed_as = 31;
   */
  committedAs: bigint;

  /**
   * @generated from field: uint64 vmalloc_total = 32;
   */
  vmallocTotal: bigint;

  /**
   * @generated from field: uint64 vmalloc_used = 33;
   */
  vmallocUsed: bigint;

  /**
   * @generated from field: uint64 vmalloc_chunk = 34;
   */
  vmallocChunk: bigint;

  /**
   * @generated from field: uint64 hardware_corrupted = 35;
   */
  hardwareCorrupted: bigint;

  /**
   * @generated from field: uint64 anon_huge_pages = 36;
   */
  anonHugePages: bigint;

  /**
   * @generated from field: uint64 shmem_huge_pages = 37;
   */
  shmemHugePages: bigint;

  /**
   * @generated from field: uint64 shmem_pmd_mapped = 38;
   */
  shmemPmdMapped: bigint;

  /**
   * @generated from field: uint64 cma_total = 39;
   */
  cmaTotal: bigint;

  /**
   * @generated from field: uint64 cma_free = 40;
   */
  cmaFree: bigint;

  /**
   * @generated from field: uint64 huge_pages_total = 41;
   */
  hugePagesTotal: bigint;

  /**
   * @generated from field: uint64 huge_pages_free = 42;
   */
  hugePagesFree: bigint;

  /**
   * @generated from field: uint64 huge_pages_rsvd = 43;
   */
  hugePagesRsvd: bigint;

  /**
   * @generated from field: uint64 huge_pages_surp = 44;
   */
  hugePagesSurp: bigint;

  /**
   * @generated from field: uint64 hugepagesize = 45;
   */
  hugepagesize: bigint;

  /**
   * @generated from field: uint64 direct_map4k = 46;
   */
  directMap4k: bigint;

  /**
   * @generated from field: uint64 direct_map2m = 47;
   */
  directMap2m: bigint;

  /**
   * @generated from field: uint64 direct_map1g = 48;
   */
  directMap1g: bigint;
};

/**
 * Describes the message talos.resource.definitions.perf.MemorySpec.
 * Use `create(MemorySpecSchema)` to create a new message.
 */
export const MemorySpecSchema: GenMessage<MemorySpec> = /*@__PURE__*/
  messageDesc(file_resource_definitions_perf_perf, 2);

