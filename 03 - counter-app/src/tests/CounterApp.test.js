import React from 'react';
import '@testing-library/jest-dom';
// import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import CounterApp from "../CounterApp";

describe('Pruebas en <CounterApp />', () => {


    let wrapper = shallow( <CounterApp  /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp  /> );
    });



    test('Debe de mostrar <CounterApp /> correctamente', () => {
 
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar el valor por defecto de 100', () => {
    
        const value = 100;

        const wrapper = shallow( <CounterApp value = {value} /> );

        const valueH2 = wrapper.find('#contador').text().trim();

        expect(valueH2).toBe(`${value}`)

    });

    test('Debe de incrementar con el botón +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const valueH2 = wrapper.find('#contador').text().trim();

        // console.log(valueH2);

        expect(valueH2).toBe('11');
        
    });


    test('Debe de decrementar con el botón -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const valueH2 = wrapper.find('#contador').text().trim();

        expect(valueH2).toBe('9');

    });

    test('Debe de colocar el valor por defecto con el btn reset', () => {

        const wrapper = shallow( <CounterApp value = { 105 } /> );

        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');

        const valueH2 = wrapper.find('#contador').text().trim();

        expect(valueH2).toBe('105');

    })
        
});
