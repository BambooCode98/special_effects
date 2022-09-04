/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { AggregatedResult } from '@jest/test-result';
import type { SummaryOptions } from './types';
export declare const PROGRESS_BAR_WIDTH = 40;
export default function getSummary(aggregatedResults: AggregatedResult, options?: SummaryOptions): string;
