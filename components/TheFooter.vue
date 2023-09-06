<template>
<footer class="footer">
    <div class="info">
        <div class="about">
            <IconsLogo class="logo" />
            <p class="description">Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности</p>
        </div>
        <div class="links">
            <p class="links__emailLabel">email</p>
            <a class="links__emailLink" href="mailto:testblogsupport@gmail.com" id="email">testblogsupport@gmail.com</a>
            <div class="socialMedia">
                <a class="socialMedia__link" href="#" target="_blank">
                    <IconsFacebook />
                </a>
                <a class="socialMedia__link" href="#" target="_blank">
                    <IconsVk />
                </a>
                <a class="socialMedia__link" href="#" target="_blank">
                    <IconsInstagram />
                </a>
                <a class="socialMedia__link" href="#" target="_blank">
                    <IconsTelegram />
                </a>
            </div>
        </div>
    </div>
    <form class="form" @submit="console.log('Подписка оформлена')" method="post">
        <label class="form__label" for="input">Подпишитесь на рассылку</label>
        <input class="form__input" type="text" id="input" placeholder="Email">
        <BaseButton btnType="submit" >Подписаться</BaseButton>
    </form>
</footer>
</template>

<style scoped lang="scss">
.footer {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #8d959c;
}

.info {
    width: 100%;
    max-width: 1370px;
    margin: 0 auto 70px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 740px) {
        & {
            flex-direction: column;
            align-items: center;
            row-gap: 20px;
        }
    }
}

.about {
    @media (max-width: 740px) {
        & {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}

.logo {
    margin-bottom: 20px;
}

.description {
    max-width: 426px;
    color: #8d959c;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    @media (max-width: 740px) {
        & {
            text-align: center;
        }
    }
}

.links__emailLabel {
    color: #8d959c;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.links__emailLink {
    display: block;
    margin-bottom: 24px;
    color: #1b1b1b;
    font-family: Ubuntu;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;

    &:hover {
        text-decoration: underline;
    }
}

.socialMedia {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.socialMedia__link {
    transform: scale(100%);
    transition: all 0.4s linear;

    &:hover {
        transform: scale(150%);
    }
}

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
