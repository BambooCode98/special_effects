/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare type ResolveOptions = {
    rootDir: string;
    key: string;
    filePath: string;
    optional?: boolean;
};
export declare const BULLET: string;
export declare const DOCUMENTATION_NOTE: string;
export declare const resolve: (resolver: string | null | undefined, { key, filePath, rootDir, optional }: ResolveOptions) => string;
export declare const escapeGlobCharacters: (path: string) => string;
export declare const replaceRootDirInPath: (rootDir: string, filePath: string) => string;
declare type OrArray<T> = T | Array<T>;
declare type ReplaceRootDirConfigObj = Record<string, string>;
declare type ReplaceRootDirConfigValues = OrArray<ReplaceRootDirConfigObj> | OrArray<RegExp> | OrArray<string>;
export declare const _replaceRootDirTags: <T extends ReplaceRootDirConfigValues>(rootDir: string, config: T) => T;
declare type JSONString = string & {
    readonly $$type: never;
};
export declare const isJSONString: (text?: JSONString | string) => text is JSONString;
export {};
