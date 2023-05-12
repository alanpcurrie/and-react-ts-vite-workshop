import type { Result } from 'types/types'

export function makeResult<T, E extends Error>(fn: () => T): Result<T, E> {
    try {
        const result = fn();
        return { ok: true, value: result };
    } catch (error) {
        return { ok: false, error: error as E };
    }
}

// usage

const divide = (dividend: number, divisor: number): number => {
    if (divisor === 0) {
        throw new Error("division by zero");
    }
    return dividend / divisor;
};

const result = makeResult<number, Error>(() => divide(10, 2));

if (result.ok) {
    console.log(`Result is ${result.value}`);
} else {
    console.error(`Error occurred: ${result.error.message}`);
}
