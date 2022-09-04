/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export interface ShardPair {
    shardCount: number;
    shardIndex: number;
}
export declare const parseShardPair: (pair: string) => ShardPair;
