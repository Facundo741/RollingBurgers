/**
 * @author Facundo Santillan
 * @param {Event} e Recibe el evento del formulario
 * @returns {Object} Retorna un objeto con clave valor
 */


export const getFormData = (e) => {
    const formData = new FormData(e.target);
    const formObject = {};
    for (const [key, value] of formData.entries()) {
        formObject[key] = value;
    }
    return formObject;
};