import demo from "../src/utils/demo";
import { expect, test } from 'vitest'

test('says hello to Iain', () => {
    expect(demo('Iain')).toBe('Hello Iain!!')
  })