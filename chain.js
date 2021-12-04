class Node extends HTMLElement{
    constructor(){
        super();
        this.link = null;
        this.if = null;
        this.function = null;
        this.var = null;
        this.varif = null; 
        this.and = false;
        this.for = null;
    }

    static observedAttributes = ["link","if","function","var","varif","and","for"]

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

    get for(){
        return this.getAttribute('for');
    }

    set for(val){
        if(val){
            this.setAttribute('for', val)
        }
        else{
            this.removeAttribute('for')
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
        if(eval(this.and) === true){
            if(this.if !== null && this.var !== null && this.varif !== null){
                if(eval(this.if) && document.getElementById(this.var).getAttribute('val') === this.varif){
                    if(this.for !== null){
                        if(typeof eval(this.for) === "number"){
                            for(let x = 0; x < this.for; x++){
                                this.addPage();
                            }
                        }
                        else if(typeof this.for === "string"){
                            for(let x = 0; x < document.getElementById(this.for).getAttribute('val'); x++){
                                this.addPage();
                            }
                        }
                    }
                    else{
                        this.changePage();
                    }
                }
            }
        }
        if(this.and === null || eval(this.and) === false){
            if(this.if !== null || (this.var !== null && this.varif !== null)){
                if(eval(this.if) || document.getElementById(this.var).getAttribute('val') === this.varif){
                    if(this.for !== null){
                        if(typeof eval(this.for) === "number"){
                            for(let x = 0; x < this.for; x++){
                                this.addPage();
                            }
                        }
                        else if(typeof this.for === "string"){
                            for(let x = 0; x < document.getElementById(this.for).getAttribute('val'); x++){
                                this.addPage();
                            }
                        }
                    }
                    else{
                        this.changePage();
                    }
                }
            }
        }
        if(this.function !== null){
            eval(this.function)
        }
        if(this.if === null && this.var === null && this.varif === null){
            if(this.for !== null){
                if(typeof eval(this.for) === "number"){
                    for(let x = 0; x < this.for; x++){
                        this.addPage();
                    }
                }
                else if(typeof this.for === "string"){
                    for(let x = 0; x < document.getElementById(this.for).getAttribute('val'); x++){
                        this.addPage();
                    }
                }
            }
            else{
                this.changePage();
            }
        }
    }
    changePage(){
        fetch(this.link).then(data => data.text()).then(html => this.innerHTML = html)
    }
    addPage(){
        fetch(this.link).then(data => data.text()).then(html => this.innerHTML += html)
    }
}

class Link extends HTMLElement{
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
        if(eval(this.and) === true){
            if(this.if !== null && this.var !== null && this.varif !== null){
                if(eval(this.if) && document.getElementById(this.var).getAttribute('val') === this.varif){
                    this.changePage();
                }
            }
        }
        if(this.and === null || eval(this.and) === false){
            if(this.if !== null || (this.var !== null && this.varif !== null)){
                if(eval(this.if) || document.getElementById(this.var).getAttribute('val') === this.varif){
                    this.changePage();
                }
            }
        }
        if(this.function !== null){
            eval(this.function)
        }
        if(this.if === null && this.var === null && this.varif === null){
            this.changePage();
        }
    }

    changePage(){
        window.location.href = this.link
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
    }
}

customElements.define("chain-link", Link);
customElements.define("chain-var", Var);
customElements.define("chain-node", Node);