/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { JestEnvironment } from '@jest/environment';
import type { SerializableError, Test, TestEvents, TestFileEvent, TestResult } from '@jest/test-result';
import type { Config } from '@jest/types';
import type RuntimeType from 'jest-runtime';
import type { TestWatcher } from 'jest-watcher';
export declare type ErrorWithCode = Error & {
    code?: string;
};
export declare type OnTestStart = (test: Test) => Promise<void>;
export declare type OnTestFailure = (test: Test, serializableError: SerializableError) => Promise<void>;
export declare type OnTestSuccess = (test: Test, testResult: TestResult) => Promise<void>;
export declare type TestFramework = (globalConfig: Config.GlobalConfig, config: Config.ProjectConfig, environment: JestEnvironment, runtime: RuntimeType, testPath: string, sendMessageToJest?: TestFileEvent) => Promise<TestResult>;
export declare type TestRunnerOptions = {
    serial: boolean;
};
export declare type TestRunnerContext = {
    changedFiles?: Set<string>;
    sourcesRelatedToTestsInChangedFiles?: Set<string>;
};
declare type SerializeSet<T> = T extends Set<infer U> ? Array<U> : T;
export declare type TestRunnerSerializedContext = {
    [K in keyof TestRunnerContext]: SerializeSet<TestRunnerContext[K]>;
};
export declare type UnsubscribeFn = () => void;
export interface CallbackTestRunnerInterface {
    readonly isSerial?: boolean;
    readonly supportsEventEmitters?: boolean;
    runTests(tests: Array<Test>, watcher: TestWatcher, onStart: OnTestStart, onResult: OnTestSuccess, onFailure: OnTestFailure, options: TestRunnerOptions): Promise<void>;
}
export interface EmittingTestRunnerInterface {
    readonly isSerial?: boolean;
    readonly supportsEventEmitters: true;
    runTests(tests: Array<Test>, watcher: TestWatcher, options: TestRunnerOptions): Promise<void>;
    on<Name extends keyof TestEvents>(eventName: Name, listener: (eventData: TestEvents[Name]) => void | Promise<void>): UnsubscribeFn;
}
declare abstract class BaseTestRunner {
    protected readonly _globalConfig: Config.GlobalConfig;
    protected readonly _context: TestRunnerContext;
    readonly isSerial?: boolean;
    abstract readonly supportsEventEmitters: boolean;
    constructor(_globalConfig: Config.GlobalConfig, _context: TestRunnerContext);
}
export declare abstract class CallbackTestRunner extends BaseTestRunner implements CallbackTestRunnerInterface {
    readonly supportsEventEmitters = false;
    abstract runTests(tests: Array<Test>, watcher: TestWatcher, onStart: OnTestStart, onResult: OnTestSuccess, onFailure: OnTestFailure, options: TestRunnerOptions): Promise<void>;
}
export declare abstract class EmittingTestRunner extends BaseTestRunner implements EmittingTestRunnerInterface {
    readonly supportsEventEmitters = true;
    abstract runTests(tests: Array<Test>, watcher: TestWatcher, options: TestRunnerOptions): Promise<void>;
    abstract on<Name extends keyof TestEvents>(eventName: Name, listener: (eventData: TestEvents[Name]) => void | Promise<void>): UnsubscribeFn;
}
export declare type JestTestRunner = CallbackTestRunner | EmittingTestRunner;
export {};
