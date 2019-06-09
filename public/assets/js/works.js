class Works
{
    constructor($container)
    {
        this.$container = $container

        this.illustration()
        this.interface()
    }

    illustration()
    {
        const color1 = 
        {
            color1: "#fd6901",
            color2: "#120a6d",
            color3: "#fe9900"
        }
        const color2 = 
        {
            color1: "#fd6901",
            color2: "#120a6d",
            color3: "#fe9900"
        }
        const color3 = 
        {
            color1: "#fd6901",
            color2: "#120a6d",
            color3: "#fe9900"
        }
        const color4 = 
        {
            color1: "#fd6901",
            color2: "#120a6d",
            color3: "#fe9900"
        }

        this.image = {}
        this.image.$items = this.$container.querySelectorAll('.shadow_illustration')
        for(let i = 0; i < this.image.$items.length; i++)
        {
            this.image.$items[i].addEventListener('click', () =>{
                const $more = document.querySelector('.more')
                const $color1 = document.querySelector('.colors .color1')
                const $color2 = document.querySelector('.colors .color2')
                const $color3 = document.querySelector('.colors .color3')
                $more.style.height = '100vh'
                /* Don't pay attention to this ugly thing*/
                if (i == 0) {
                    $color1.style.backgroundColor = color1.color1
                    $color2.style.backgroundColor = color1.color2
                    $color3.style.backgroundColor = color1.color3
                }
                if (i == 1) {
                    $color1.style.backgroundColor = color2.color1
                    $color2.style.backgroundColor = color2.color2
                    $color3.style.backgroundColor = color2.color3
                }
                if (i == 2) {
                    $color1.style.backgroundColor = color3.color1
                    $color2.style.backgroundColor = color3.color2
                    $color3.style.backgroundColor = color3.color3
                }
                if (i == 3) {
                    $color1.style.backgroundColor = color4.color1
                    $color2.style.backgroundColor = color4.color2
                    $color3.style.backgroundColor = color4.color3
                }
                window.scrollTo(
                    {
                        top: 1000,
                        behavior: 'smooth'
                    }
                
                )
            })
            
        }
    }
    interface()
    {
        const color1 = 
        {
            color1: "#435e6f",
            color2: "#fc4e2b",
            color3: "#e5dbc7"
        }
        const color2 = 
        {
            color1: "#435e6f",
            color2: "#fc4e2b",
            color3: "#e5dbc7"
        }
        const color3 = 
        {
            color1: "#435e6f",
            color2: "#fc4e2b",
            color3: "#e5dbc7"
        }
        const color4 = 
        {
            color1: "#435e6f",
            color2: "#fc4e2b",
            color3: "#e5dbc7"
        }

        this.image = {}
        this.image.$items = this.$container.querySelectorAll('.shadow_interface')
        for(let i = 0; i < this.image.$items.length; i++)
        {
            this.image.$items[i].addEventListener('click', () =>{
                const $more = document.querySelector('.more')
                const $color1 = document.querySelector('.colors .color1')
                const $color2 = document.querySelector('.colors .color2')
                const $color3 = document.querySelector('.colors .color3')
                $more.style.height = '100vh'
                /* Don't pay attention to this ugly thing*/
                if (i == 0) {
                    $color1.style.backgroundColor = color1.color1
                    $color2.style.backgroundColor = color1.color2
                    $color3.style.backgroundColor = color1.color3
                }
                if (i == 1) {
                    $color1.style.backgroundColor = color2.color1
                    $color2.style.backgroundColor = color2.color2
                    $color3.style.backgroundColor = color2.color3
                }
                if (i == 2) {
                    $color1.style.backgroundColor = color3.color1
                    $color2.style.backgroundColor = color3.color2
                    $color3.style.backgroundColor = color3.color3
                }
                if (i == 3) {
                    $color1.style.backgroundColor = color4.color1
                    $color2.style.backgroundColor = color4.color2
                    $color3.style.backgroundColor = color4.color3
                }
                window.scrollTo(
                    {
                        top: 1000,
                        behavior: 'smooth'
                    }
                
                )
            })
            
        }
    }
}