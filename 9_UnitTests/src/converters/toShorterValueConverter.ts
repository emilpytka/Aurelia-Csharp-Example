export class ToShorterValueConverter{
  toView(beforeConvert: string, maxNum: number) : string{
    if (beforeConvert == null)
      return null;

    var lastIndex: number = beforeConvert.length < maxNum ? beforeConvert.length : maxNum;
    return beforeConvert.substring(0, lastIndex);
  }
}
