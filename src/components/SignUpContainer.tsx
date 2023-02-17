
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


        </div>
    )
}