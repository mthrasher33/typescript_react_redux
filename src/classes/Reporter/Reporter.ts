export abstract class Reporter<T> {
  report(data: T) {
    console.log(data);
  }

  abstract build(): void;
}
