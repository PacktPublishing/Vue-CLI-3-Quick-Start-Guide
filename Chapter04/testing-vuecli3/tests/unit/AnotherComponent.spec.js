import { mount } from '@vue/test-utils';
import AnotherComponent from '@/components/AnotherComponent.vue';

describe('AnotherComponent.vue', () => {
    const wrapped = mount(AnotherComponent);
    const button = wrapped.find('button');
    test('Checks that the initial counter value is 0', () => {
        expect(wrapped.text()).toContain('Current value of the counter: 0');
    });
    test('Adds one when a user clicks the button', () => {
        button.trigger('click');
        expect(wrapped.text()).toContain('Current value of the counter: 1');
    }) 
}) 