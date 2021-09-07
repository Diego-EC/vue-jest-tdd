import Item from "@/app/shop/infrastructure/components/Item.vue";
import { mount, shallowMount } from '@vue/test-utils';

test('Item', () => {
    it('Renders Item content', () => {
        const ITEM_DATA = { name: 'foo', price: 33 };
        const wrapper = mount(Item, {propsData: {item: ITEM_DATA}})

        expect(wrapper.text()).toContain('foo');
        expect(wrapper.text()).toContain(33);
    })

    it('Renders Item structure', () => {
        const ITEM_DATA = { name: 'foo', price: 33 };
        const wrapper = mount(Item, {propsData: {item: ITEM_DATA}});

        const div = wrapper.find('div');
        expect(div.exists()).toBe(true);

        const bCardText = wrapper.find('b-card-text');
        expect(bCardText.exists()).toBe(true);

        const standardCard = wrapper.find('.standard-card');
        expect(standardCard.exists()).toBe(true);

        const dynamicSize = wrapper.find('.dynamic-size');
        expect(dynamicSize.exists()).toBe(true);
    })

    it('Item functionalities', () => {
        const ITEM_DATA = { name: 'foo', price: 33 };
        const wrapper = mount(Item, {propsData: {item: ITEM_DATA}});
        const onClick = jest.fn();
        
        wrapper.setMethods({ like: onClick });
        wrapper.find('b-button').trigger('click');

        expect(onClick).toHaveBeenCalled();
    })
})