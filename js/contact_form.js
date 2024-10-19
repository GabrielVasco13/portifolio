document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio precoce do formulário

    // Pega os valores dos campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("form-message");

    // Limpa mensagens anteriores
    formMessage.style.display = 'none';
    formMessage.textContent = '';
    formMessage.classList.remove('error', 'success');

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !subject || !message) {
        formMessage.textContent = 'Por favor, preencha todos os campos.';
        formMessage.classList.add('error');
        formMessage.style.display = 'block';
        return; // Para a execução se faltar algum campo
    }

    // Validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Por favor, insira um e-mail válido.';
        formMessage.classList.add('error');
        formMessage.style.display = 'block';
        return; // Para a execução se o e-mail for inválido
    }

    // Envia os dados usando mailto (abre o cliente de e-mail)
    const mailtoLink = `mailto:seuemail@exemplo.com?subject=${encodeURIComponent(subject)}&body=Nome: ${encodeURIComponent(name)}%0AE-mail: ${encodeURIComponent(email)}%0AMensagem:%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;

    // Exibe uma mensagem de sucesso
    formMessage.textContent = 'Sua mensagem foi enviada com sucesso!';
    formMessage.classList.add('success');
    formMessage.style.display = 'block';

    // Limpa os campos
    document.getElementById("contactForm").reset();
});
