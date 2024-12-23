import './App.css'
import History from "./components /history/history.componenet.tsx";
import CalcArea from "./components /calc-area/calc-area.componenet.tsx";
import ButtonsArea from "./components /buttons-area/buttons-area.componenet.tsx";
import {useState} from "react";

function App() {
    const [expression, setexpression]= useState <string[]>([" "])
    const [history, setHistory]= useState <string[]>([" "])

    //to handel the multi numbers in the expression with multi operatorts
    //I wrote the base of calculate function then I gave it to chat to optimize it(it's the only thing from chat)
    //since we foucs on react and concpets we learned, not on the algorthim, knowing that i wrote it alone first time!
    const calculate = (expression: string[]): void => {
        try {
            // Step 1: Parse the expression to combine numbers and operators
            const tokens: string[] = [];
            let currentNumber = '';

            for (const char of expression) {
                if (/\d/.test(char)) {
                    currentNumber += char;
                } else if (['+', '-', 'x', '/'].includes(char)) {
                    if (currentNumber !== '') {
                        tokens.push(currentNumber);
                        currentNumber = '';
                    }
                    tokens.push(char);
                }
            }

            if (currentNumber !== '') tokens.push(currentNumber);

            // Step 2: Convert to postfix (Shunting Yard Algorithm)
            const precedence: { [key: string]: number } = { '+': 1, '-': 1, 'x': 2, '/': 2 };
            const outputQueue: string[] = [];
            const operatorStack: string[] = [];

            tokens.forEach(token => {
                if (!isNaN(Number(token))) {
                    outputQueue.push(token);
                } else if (['+', '-', 'x', '/'].includes(token)) {
                    while (
                        operatorStack.length &&
                        precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
                        ) {
                        outputQueue.push(operatorStack.pop()!);
                    }
                    operatorStack.push(token);
                }
            });

            while (operatorStack.length) {
                outputQueue.push(operatorStack.pop()!);
            }

            // Step 3: Evaluate postfix expression
            const evaluationStack: number[] = [];
            outputQueue.forEach(token => {
                if (!isNaN(Number(token))) {
                    evaluationStack.push(Number(token));
                } else if (['+', '-', 'x', '/'].includes(token)) {
                    const b = evaluationStack.pop()!;
                    const a = evaluationStack.pop()!;
                    if (token === '+') evaluationStack.push(a + b);
                    if (token === '-') evaluationStack.push(a - b);
                    if (token === 'x') evaluationStack.push(a * b);
                    if (token === '/') evaluationStack.push(a / b);
                }
            });

            // Update the expression with the result
            const result = evaluationStack[0] || 0;
            const expressionString = expression.join('').replace(/x/g, '*');

            setHistory(prev => [...prev, `${expressionString}=${result}`]);
            setexpression([result.toString()]);
        } catch (error) {
            console.error("Invalid expression", error);
            setexpression(["Error"]);
        }
    };

    const handleButtonClick =(value:string ,operation:boolean)=>{
        if ( operation && value === '=' )
        {
            calculate(expression)
        }
        else if (operation && value === 'Clr')
            setexpression([""])
        else if (operation && value === 'Del')
            setexpression(expression.slice(0, -1),)
        else
            setexpression([... expression, value])
        }
    return (
      <>
          <History history={history} />
          <CalcArea expression ={expression}/>
          <ButtonsArea updateExp={handleButtonClick} />
      </>
  )
}

export default App
