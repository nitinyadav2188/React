function customRender(reactElement, container){
    const domElement=document.createElement
    (reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',raectElement.props.target)



// hello this is github showing to niraj



    container.appendChild(domElement);
}

const reactElement={
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement, mainContainer)

