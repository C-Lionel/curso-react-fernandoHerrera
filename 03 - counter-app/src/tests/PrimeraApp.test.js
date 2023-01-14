import React from 'react';
import '@testing-library/jest-dom';
// import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "hola, soy Lionel Cancellieri" ', () => {

    //     const saludo = 'Hola, soy Lionel Cancellieri';

    //     const {getByText} = render( <PrimeraApp saludo = {saludo} /> );

    //     expect( getByText( saludo ) ).toBeInTheDocument();
        
    // });


    test('Debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Lionel Cancellieri';
        const wrapper = shallow( <PrimeraApp saludo = { saludo } /> );
        
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola, soy Lionel Cancellieri';
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow( <PrimeraApp saludo = { saludo } subtitulo={ subTitulo } /> );

        const textoParrafo = wrapper.find('p').text();

        console.log(textoParrafo)

        expect(textoParrafo).toBe(subTitulo);

        
    });
    
    
    
    
});
