<template>
<form class="form" @submit="console.log('Подписка оформлена')" method="post">
    <label class="form__label" for="input">Подпишитесь на рассылку</label>
    <input class="form__input" type="text" id="input" placeholder="Email">
    <BaseButton btnType="submit" />
</form>
</template>

<style scoped lang="scss">
.form {
    width: 100%;
    max-width: 1340px;
    margin: 0 auto;
    padding: 27px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 2px;
    background-color: #1B1B1B;

    @media (max-width: 1040px) {
        & {
            flex-direction: column;
            row-gap: 20px;
        }
    }
}

.form__label {
    margin-right: auto;
    color: #fefefe;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;

    @media (max-width: 1040px) {
        & {
            margin-right: 0;
            text-align: center;
        }
    }
}

.form__input {
    width: 100%;
    max-width: 353px;
    margin-right: 87px;
    padding: 0 5px;
    border: none;
    border-bottom: 1px solid #8d959c;
    color: #8d959c;
    background-color: transparent;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    transition: all 0.4s linear;

    &:active, 
    &:focus {
        border-bottom: 1px solid #3657d3;
    }

    @media (max-width: 1040px) {
        & {
            margin-right: 0;
        }
    }
}
</style>
