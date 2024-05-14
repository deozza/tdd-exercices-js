import AddOperationService from '$lib/services/calculator/AddOperationService';
import CalculatorService from '$lib/services/calculator/CalculatorService';
import { describe, it, expect, vi, afterEach } from 'vitest';

describe('CalculatorService calculate() test', () => {

    afterEach(() => {
        vi.restoreAllMocks()
      })

    it('checks class is called according to operator', () => {

        let mockedResult = 3;

        const calculatorService: CalculatorService = new CalculatorService();

        const spy = vi.spyOn(new AddOperationService(1,2), "getValue").mockImplementation(() => mockedResult);

        expect(calculatorService.calculate("+", 1, 2)).toBe(3);

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveReturnedWith(3)



        // let apples = 0
        // const cart = {
        //     getApples: () => 42,
        // }

        // const spy = vi.spyOn(cart, 'getApples').mockImplementation(() => apples)

        // expect(cart.getApples()).toBe(1)

        // expect(spy).toHaveBeenCalled()
        // expect(spy).toHaveReturnedWith(1)
    })


})