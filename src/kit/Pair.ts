/**
 * Created by simon on 2016/12/30.
 */
export default class Pair<K, V> {
  public key: K
  public value: V

  constructor(key: K, value: V) {
    this.key = key
    this.value = value
  }
}
