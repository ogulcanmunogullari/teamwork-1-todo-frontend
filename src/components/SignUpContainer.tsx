
type Props={
    themeIsLight:boolean,
}

export const SignUpContainer = ({themeIsLight}:Props) => {
    return(
        <div
            className={`${
                themeIsLight
                    ? 'bg-light-background border-light-border'
                    : 'bg-dark-background border-dark-border'
            } max-w-[640px] p-5 mx-auto border`}>

            <div className="flex flex-col gap-2">
                <div className={`flex gap-2`}>
                    <label htmlFor="signUpInput" className={`${themeIsLight ? 'text-light-text' : 'text-dark-text'} w-16`}>Kayıt Ol:</label>
                    <input id="signUpInput" className={`flex-1 ${themeIsLight ? 'bg-light-input-background text-light-text' : 'bg-dark-input-background text-dark-text'}`} type="text" />
                </div>
                <div className={`flex gap-2`}>
                    <label htmlFor="passwordInput" className={`${themeIsLight ? 'text-light-text' : 'text-dark-text'} w-16`}>Şifre:</label>
                    <input type='password' id="passwordInput" className={`flex-1  ${themeIsLight ? 'bg-light-input-background text-light-text' : 'bg-dark-input-background text-dark-text'}`} />
                </div>

            </div>
        </div>
    )
}