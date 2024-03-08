export * from './async-flatten'
export * from './transform-to-rollup-output'
export * from './normalize-plugin-option'
export * from './ensure-array'
export * from './create-bundler'
export * from './transform-sourcemap'

export function arraify<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}

export function unimplemented(info?: string): Error {
  if (info) {
    throw new Error(`unimplemented: ${info}`)
  }
  throw new Error('unimplemented')
}

export function noop(..._args: any[]) { }
