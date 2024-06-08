function validarYOperar() {
            const input1 = parseFloat(document.getElementById('input1').value);
            const input2 = parseFloat(document.getElementById('input2').value);
            const input3 = parseFloat(document.getElementById('input3').value);
            let resultado = '';

            if (input1 < input3) {
                const suma = input1 + input2 + input3;
                resultado = `Se realizó la suma: ${input1} + ${input2} + ${input3} = ${suma}`;
            } else if (input2 === 0) {
                const resta = Math.max(input1, input3) - Math.min(input1, input3);
                resultado = `Se realizó la resta entre el mayor y el menor de los inputs 1 y 3: ${resta}`;
            } else if (input1 === input2) {
                const multiplicacion = input1 * input2 * input3;
                resultado = `Se realizó la multiplicación: ${input1} * ${input2} * ${input3} = ${multiplicacion}`;
            } else {
                resultado = 'No se cumple ninguna condición específica.';
            }

            document.getElementById('resultado').innerText = resultado;
        }

        function validarYSumar() {
            const input1 = parseFloat(document.getElementById('input1').value);
            const input2 = parseFloat(document.getElementById('input2').value);
            const input3 = parseFloat(document.getElementById('input3').value);
            const suma = input1 + input2 + input3;
            let resultado = '';

            if (suma > 10) {
                for (let i = 0; i < suma; i++) {
                    resultado += `Resultado de multiplicar y restar: ${input1 * input2 - input3}\n`;
                }
            } else {
                for (let i = 0; i < suma; i++) {
                    resultado += `Resultado de la suma: ${input1 + input2 + input3}\n`;
                }
            }

            document.getElementById('resultado').innerText = resultado;
        }




