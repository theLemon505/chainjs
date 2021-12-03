class Chain extends HTMLElement{
    constructor(){
        super();
        this.link = null;
        this.if = null;
        this.function = null;
        this.var = null;
        this.varif = null; 
        this.and = false;
    }

    static observedAttributes = ["link","if","function","var","varif", "and"]

    connectedCallback(){
        this.updateRendering();
    }

    get link(){
        return this.getAttribute('link');
    }

    set link(val){
        if(val){
            this.setAttribute('link', val)
        }
        else{
            this.removeAttribute('link')
        }
    }

    get function(){
        return this.getAttribute('function');
    }

    set function(val){
        if(val){
            this.setAttribute('function', val)
        }
        else{
            this.removeAttribute('function')
        }
    }

    get var(){
        return this.getAttribute('var');
    }

    set var(val){
        if(val){
            this.setAttribute('var', val)
        }
        else{
            this.removeAttribute('var')
        }
    }

    get varif(){
        return this.getAttribute('varif');
    }

    set varif(val){
        if(val){
            this.setAttribute('varif', val)
        }
        else{
            this.removeAttribute('varif')
        }
    }

    get and(){
        return this.getAttribute('and');
    }

    set and(val){
        if(val){
            this.setAttribute('and', val)
        }
        else{
            this.removeAttribute('and')
        }
    }

    get if(){
        return this.getAttribute('if');
    }

    set if(val){
        if(val){
            this.setAttribute('if', val)
        }
        else{
            this.removeAttribute('if')
        }
    }

    updateRendering(){
        if(this.if === null){
            return
        }
        if(eval(this.and) === true){
            if(this.if !== null){
                if(eval(this.if) && document.getElementById(this.var).getAttribute('val') === this.varif){
                    fetch(this.link).then(data => data.text()).then(html => this.innerHTML = html)
                }
            }
        }
        if(eval(this.and) === false){
            if(eval(this.if)){
                fetch(this.link).then(data => data.text()).then(html => this.innerHTML = html)
            }
            if(document.getElementById(this.var).getAttribute('val') !== this.varif){
                return
            }
            if(document.getElementById(this.var).getAttribute('val') === this.varif){
                fetch(this.link).then(data => data.text()).then(html => this.innerHTML = html)
            }
            if(this.function !== null){
                eval(this.function)
            }
        }

        if(eval(this.and) === null){
            if(eval(this.if)){
                fetch(this.link).then(data => data.text()).then(html => this.innerHTML = html)
            }
            if(document.getElementById(this.var).getAttribute('val') !== this.varif){
                return
            }
            if(document.getElementById(this.var).getAttribute('val') === this.varif){
                fetch(this.link).then(data => data.text()).then(html => this.innerHTML = html)
            }
            if(this.function !== null){
                eval(this.function)
            }
        }
    }
}

class Var extends HTMLElement{
    constructor(){
        super()
        this.val = ""
    }
    
    connectedCallback(){
        this.update();
    }

    static observedAttributes = ["val"]

    get val(){
        return this.getAttribute('val');
    }

    set val(value){
        if(value){
            this.setAttribute('val', value)
        }
        else{
            this.removeAttribute('val')
        }
    }

    update(){
        console.log(this.val);
    }
}

customElements.define("chain-var", Var);
customElements.define("chain-node", Chain);