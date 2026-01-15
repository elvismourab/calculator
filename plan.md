# Plan

- You should round answers with long decimals so that they don’t overflow the display.

- Pressing = before entering all of the numbers or an operator could cause problems!

---

Extra credit

    Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.
    Add a “backspace” button, so the user can undo their last input if they click the wrong number.
    Add keyboard support!

---

# VARIÁVEIS INICIAIS:

currentValue
currentOperator
nextValue
nextOperator

---

# MAPEAMENTO DO FLUXO 12 + 7 -; 19; 1; =; 18

\* Calculadora no estado inicial.

- Usuário aperta o botão '1'
- VALIDAÇÃO()
- UPDATE_DISPLAY()
- currentValue = '1'
- display exibe '1'
- Usuário aperta o botão '2'
- VALIDACAO()
- UPDATE_DISPLAY()
- currentValue += '2'
- currentValue === '12'
- Usuário aperta o botão '+'
- VALIDAÇÃO()
- UPDATE_DISPLAY()
- currentOperator = '+'
- display continua exibindo currentValue
- Usuário aperta o botão '7'
- VALIDAÇÃO()
- UPDATE_DISPLAY()
- nextValue = '7'
- Usuário aperta o botão '-'
- VALIDAÇÃO()
- UPDATE_DISPLAY()
- Usuário aperta o botão '1'
- VALIDAÇÃO()
- UPDATE_DISPLAY()
- display exibe '1'
- Usuário aperta o botão '='
- VALIDAÇÃO()

---

**VALIDAÇÃO()**
\* recebe VALOR

SE VALOR.TIPO === CLEAR
    LIMPA TODAS AS VARIÁVEIS
    LIMPA DISPLAY

SE VALOR.TIPO === OPERADOR
    SE currentOperator === '' (E nextValue === '') ???
        currentOperator = VALOR
    SE currentOperator !== ''
        nextOperator = VALOR
        FAZER_OPERACAO()

SE VALOR.TIPO === NUMERO
    SE currentOperator === ''
        currentValue += VALOR
    SE currentOperator !== ''
        nextValue += VALOR

SE VALOR.TIPO === OPERAÇÃO

RETORNA (valor, tipo)

---

**UPDATE_DISPLAY()**
\* recebe VALOR (?)

SE (VALOR.TIPO === NUMERO) && nextValue === ''
    EXIBIR O VALOR NO DISPLAY (currentValue)
SE (VALOR.TIPO === NUMERO) && nextValue |== ''
    EXIBIR O VALOR NO DISPLAY (nextValue)

---

**FAZER_OPERACAO()** (operate)
- sum / sub / multiply / divide
- currentValue = resultado da operação.
SE nextOperator IN ('+', '-', '*', '/')
    - currentOperator = nextOperator
- nextOperator = ''
(SENAO currentOperator = '') ???
- Exibir resultado no display

---
