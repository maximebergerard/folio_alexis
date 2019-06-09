class Works
{
    constructor($container)
    {
        this.$container = $container

        this.test()
    }

    test()
    {
        let color1 = 
        {
            color1: "fd6901",
            color2: "120a6d",
            color3: "fe9900"
        }
        const color2 = 'esfrgthyj'
        this.image = {}
        this.image.$items = this.$container.querySelectorAll('.shadow')
        console.log(this.image.$items);

        for(let i = 0; i < this.image.$items.length; i++)
        {
            this.image.$items[i].addEventListener('click', () =>{
                const $more = document.querySelector('.more')
                const $color1 = document.querySelector('.colors .color1')
                const $color2 = document.querySelector('.colors .color2')
                const $color3 = document.querySelector('.colors .color3')
                $more.style.height = '100vh'
                $color1.style.backgroundColor = 
                // $color2.style.backgroundColor = color[i].color2
                // $color3.style.backgroundColor = color[i].color3
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