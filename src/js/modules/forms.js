import {postData} from "../services/requests.js";

export default class Forms {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.message = {
            loading: 'Loading...',
            success: 'Success',
            failure: 'Error, try again',
        };
        this.route = './question.php';
    }
    
    clearInputs = () => {
        this.inputs.forEach(input => {
            input.value = '';
        });
    };
    
    checkEmailInputs = () => {
        const emailInputs = document.querySelectorAll('[type="email"]');
        emailInputs.forEach(input => {
            input.addEventListener('keypress', function (e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }
    
    initPhoneMask() {
        function setCursorPosition(pos, elem) {
            elem.focus();
            elem.setSelectionRange(pos, pos);
        }
        
        function createMask(event) {
            let matrix = '+1 (___) ___ __-__',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
            
            if (def.length >= val.length) {
                val = def;
            }
            
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });
            
            if (event.type === 'blur') {
                if (this.value.length === 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }
        
        let inputs = document.querySelectorAll('[name="phone"]');
        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

    init() {
        this.initPhoneMask();
        this.checkEmailInputs();
        
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.inputs = form.querySelectorAll('input');
                
                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin-top: 16px;
                    font-size: 18px;
                    color: #000;
                `;
                statusMessage.textContent = this.message.loading;
                form.parentNode.appendChild(statusMessage);
                
                const formData = new FormData(form);
                
                postData(this.route, formData)
                    .then((res) => {
                        console.log(res);
                        statusMessage.textContent = this.message.success;
                    })
                    .catch(() => {
                        statusMessage.textContent = this.message.failure;
                    })
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    });
            });
        });
    }
    
}