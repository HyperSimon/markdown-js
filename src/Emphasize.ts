import Pair from "./kit/Pair";
import TextWrapper from "./TextWrapper";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

export default class Emphasize extends TextWrapper {
  ensureWrapper(): Pair<string, string> {
    return new Pair('*', '*');
  }

  static of(value: string) {
    return new Emphasize(value).generate()
  }
}
