// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

       let deleteButtons = document.querySelectorAll('.btn-danger')

       for (button of deleteButtons)
       {
            button.addEventListener('click',(event) =>
            {
                if(!confirm("ARE YOU SURE??"))
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
       }
    }

    window.addEventListener("load", Start);

})();