import DivOperationService from '$lib/services/calculator/DivOperationService';
import { describe, it, expect } from 'vitest';

describe('DivOperationService test', () => {

    it('getValue with positive operands', () => {

        const divOperationService: DivOperationService = new DivOperationService(1, 2)
        const result = divOperationService.getValue()
        expect(result).toBe(0.5); 
    })

    it('getValue with negative operands', () => {

        const divOperationService: DivOperationService = new DivOperationService(-1, -2)
        const result = divOperationService.getValue()
        expect(result).toBe(0.5) 
    })

    it('getValue with positive and negative', () => {

        const divOperationService: DivOperationService = new DivOperationService(1, -2)
        const result = divOperationService.getValue()
        expect(result).toBe(-0.5) 
    })

    it('getValue with string and array', () => {
        const divOperationService: DivOperationService = new DivOperationService('not a number', []);
        expect(() => divOperationService.getValue()).toThrowError(/^Operands must be numeric$/);
    })

    it('getValue with 0 as right operand', () => {
        const divOperationService: DivOperationService = new DivOperationService(10, 0);
        expect(() => divOperationService.getValue()).toThrowError(/^The right operand cannot be 0$/);
    })

    it('getValue with 0.0 as right operand', () => {
        const divOperationService: DivOperationService = new DivOperationService(10, 0.0);
        expect(() => divOperationService.getValue()).toThrowError(/^The right operand cannot be 0$/);
    })

    it('getValue with null operands', () => {
        const divOperationService: DivOperationService = new DivOperationService(null, null);
        expect(() => divOperationService.getValue()).toThrowError(/^Operands must be numeric$/);
    })

    it('getValue with number operands as strings', () => {
        const divOperationService: DivOperationService = new DivOperationService("6", "2");
        expect(() => divOperationService.getValue()).toThrowError(/^Operands must be numeric$/);
    })
})