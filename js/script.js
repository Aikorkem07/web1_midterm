$(document).ready(function () {

    let currentCategory = "all";

    function filterMenu() {
        let searchText = $("#searchInput").val().toLowerCase();
        let count = 0;

        $(".menu-item").each(function () {
            let name = $(this).find("h3").text().toLowerCase();
            let description = $(this).find("p").text().toLowerCase();
            let category = $(this).data("category");

            let textMatch = name.includes(searchText) || description.includes(searchText);
            let categoryMatch = currentCategory === "all" || category === currentCategory;

            if (textMatch && categoryMatch) {
                $(this).show();
                count++;
            } else {
                $(this).hide();
            }
        });

        $("#resultCount").text(count + " item(s) found");

        if (count === 0) {
            $("#noResults").show();
        } else {
            $("#noResults").hide();
        }
    }

    $("#searchInput").on("input", function () {
        filterMenu();
    });

    $(".filter-btn").click(function () {
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
        currentCategory = $(this).data("filter");
        filterMenu();
    });

    let emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    function showError(input, message) {
        $(input).removeClass("is-valid").addClass("is-invalid");
        $(input).siblings(".invalid-feedback").text(message);
    }

    function showSuccess(input) {
        $(input).removeClass("is-invalid").addClass("is-valid");
    }

    function checkName() {
        let name = $("#regName").val().trim();
        if (name === "") {
            showError("#regName", "Name is required");
            return false;
        }
        if (name.length < 2) {
            showError("#regName", "Name must have at least 2 letters");
            return false;
        }
        showSuccess("#regName");
        return true;
    }

    function checkEmail() {
        let email = $("#regEmail").val().trim();
        if (email === "") {
            showError("#regEmail", "Email is required");
            return false;
        }
        if (!emailRegex.test(email)) {
            showError("#regEmail", "Email format is wrong, example: name@mail.com");
            return false;
        }
        showSuccess("#regEmail");
        return true;
    }

    function getPasswordScore(password) {
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        return score;
    }

    function updateStrength() {
        let password = $("#regPassword").val();
        let score = getPasswordScore(password);
        let bar = $("#strengthBar");

        bar.removeClass("bg-danger bg-warning bg-success");

        if (password === "") {
            bar.css("width", "0%");
            $("#strengthText").text("");
        } else if (score <= 1) {
            bar.css("width", "33%").addClass("bg-danger");
            $("#strengthText").text("Weak password").css("color", "#dc3545");
        } else if (score <= 3) {
            bar.css("width", "66%").addClass("bg-warning");
            $("#strengthText").text("Medium password").css("color", "#ffc107");
        } else {
            bar.css("width", "100%").addClass("bg-success");
            $("#strengthText").text("Strong password").css("color", "#198754");
        }
    }

    function checkPassword() {
        let password = $("#regPassword").val();
        if (password === "") {
            showError("#regPassword", "Password is required");
            return false;
        }
        if (password.length < 6) {
            showError("#regPassword", "Password must have at least 6 characters");
            return false;
        }
        showSuccess("#regPassword");
        return true;
    }

    function checkConfirm() {
        let password = $("#regPassword").val();
        let confirm = $("#regConfirm").val();
        if (confirm === "") {
            showError("#regConfirm", "Please confirm your password");
            return false;
        }
        if (password !== confirm) {
            showError("#regConfirm", "Passwords do not match");
            return false;
        }
        showSuccess("#regConfirm");
        return true;
    }

    function checkMessage() {
        let message = $("#regMessage").val().trim();
        if (message === "") {
            showError("#regMessage", "Message is required");
            return false;
        }
        showSuccess("#regMessage");
        return true;
    }

    $("#regName").on("input", checkName);
    $("#regEmail").on("input", checkEmail);
    $("#regMessage").on("input", checkMessage);

    $("#regPassword").on("input", function () {
        checkPassword();
        updateStrength();
        if ($("#regConfirm").val() !== "") {
            checkConfirm();
        }
    });

    $("#regConfirm").on("input", checkConfirm);

    $("#registerForm").submit(function (event) {
        event.preventDefault();

        let nameOk = checkName();
        let emailOk = checkEmail();
        let passwordOk = checkPassword();
        let confirmOk = checkConfirm();
        let messageOk = checkMessage();

        let alertBox = $("#formAlert");
        alertBox.removeClass("alert-danger alert-success");

        if (nameOk && emailOk && passwordOk && confirmOk && messageOk) {
            let name = $("#regName").val().trim();
            alertBox.addClass("alert-success").text("Welcome to Aura & Bean club, " + name + "! Registration is successful.");
            alertBox.hide().fadeIn(400);

            this.reset();
            $("#registerForm .form-control").removeClass("is-valid is-invalid");
            updateStrength();
        } else {
            alertBox.addClass("alert-danger").text("Please fix the fields marked in red and try again.");
            alertBox.hide().fadeIn(400);
        }
    });

    let galleryImages = $(".gallery-item img");
    let currentImage = 0;

    $(".gallery-item").hide().each(function (index) {
        $(this).delay(index * 150).fadeIn(500);
    });

    function showImage(index) {
        if (index < 0) {
            index = galleryImages.length - 1;
        }
        if (index >= galleryImages.length) {
            index = 0;
        }
        currentImage = index;

        let img = galleryImages.eq(index);

        $("#lightboxImg").fadeOut(200, function () {
            $(this).attr("src", img.attr("src"));
            $(this).attr("alt", img.attr("alt"));
            $(this).fadeIn(200);
        });
        $("#lightboxCaption").text(img.attr("alt") + " (" + (index + 1) + " / " + galleryImages.length + ")");
    }

    $(".gallery-item").click(function () {
        let index = $(".gallery-item").index(this);
        let img = galleryImages.eq(index);
        currentImage = index;

        $("#lightboxImg").attr("src", img.attr("src")).attr("alt", img.attr("alt"));
        $("#lightboxCaption").text(img.attr("alt") + " (" + (index + 1) + " / " + galleryImages.length + ")");

        $("#lightbox").fadeIn(300);
        $("#lightboxImg").css("opacity", 0).animate({ opacity: 1 }, 500);
    });

    $("#nextBtn").click(function () {
        showImage(currentImage + 1);
    });

    $("#prevBtn").click(function () {
        showImage(currentImage - 1);
    });

    $("#lightboxClose").click(function () {
        $("#lightbox").fadeOut(300);
    });

    $("#lightbox").click(function (event) {
        if (event.target === this) {
            $("#lightbox").fadeOut(300);
        }
    });

    $(document).keydown(function (event) {
        if ($("#lightbox").is(":visible")) {
            if (event.key === "ArrowRight") {
                showImage(currentImage + 1);
            } else if (event.key === "ArrowLeft") {
                showImage(currentImage - 1);
            } else if (event.key === "Escape") {
                $("#lightbox").fadeOut(300);
            }
        }
    });

    let drinks = [
        { name: "Vanilla Latte", category: "Signature", price: 2000 },
        { name: "Caramel Macchiato", category: "Signature", price: 2200 },
        { name: "Chocolate Mocha", category: "Signature", price: 2000 },
        { name: "Americano", category: "Coffee", price: 1200 },
        { name: "Iced Latte", category: "Cold", price: 1900 }
    ];

    let editIndex = -1;

    function renderTable() {
        let tbody = $("#drinksTableBody");
        tbody.empty();

        if (drinks.length === 0) {
            tbody.append('<tr><td colspan="5" class="text-center">No drinks yet. Add a new one!</td></tr>');
        }

        for (let i = 0; i < drinks.length; i++) {
            let drink = drinks[i];
            let row = $("<tr></tr>");

            if (i === editIndex) {
                let nameInput = $('<input type="text" class="form-control form-control-sm edit-name">').val(drink.name);
                let categorySelect = $('<select class="form-select form-select-sm edit-category">' +
                    '<option>Coffee</option><option>Signature</option><option>Tea</option><option>Cold</option></select>').val(drink.category);
                let priceInput = $('<input type="number" class="form-control form-control-sm edit-price">').val(drink.price);

                row.append($("<td></td>").text(i + 1));
                row.append($("<td></td>").append(nameInput));
                row.append($("<td></td>").append(categorySelect));
                row.append($("<td></td>").append(priceInput));
                row.append('<td><button class="btn btn-sm btn-success save-btn" data-index="' + i + '">Save</button> ' +
                    '<button class="btn btn-sm btn-secondary cancel-btn">Cancel</button></td>');
            } else {
                row.append($("<td></td>").text(i + 1));
                row.append($("<td></td>").text(drink.name));
                row.append($("<td></td>").text(drink.category));
                row.append($("<td></td>").text(drink.price + " ₸"));
                row.append('<td><button class="btn btn-sm btn-warning edit-btn" data-index="' + i + '">Edit</button> ' +
                    '<button class="btn btn-sm btn-danger delete-btn" data-index="' + i + '">Delete</button></td>');
            }

            tbody.append(row);
        }

        $("#drinksCount").text(drinks.length);
    }

    $("#drinkForm").submit(function (event) {
        event.preventDefault();

        let name = $("#drinkName").val().trim();
        let category = $("#drinkCategory").val();
        let price = Number($("#drinkPrice").val());

        if (name === "" || price <= 0) {
            $("#drinkError").text("Please enter drink name and correct price.");
            return;
        }

        $("#drinkError").text("");
        drinks.push({ name: name, category: category, price: price });
        renderTable();
        $("#drinksTableBody tr:last").hide().fadeIn(500);
        this.reset();
    });

    $("#drinksTableBody").on("click", ".edit-btn", function () {
        editIndex = $(this).data("index");
        renderTable();
    });

    $("#drinksTableBody").on("click", ".save-btn", function () {
        let row = $(this).closest("tr");
        let index = $(this).data("index");
        let newName = row.find(".edit-name").val().trim();
        let newCategory = row.find(".edit-category").val();
        let newPrice = Number(row.find(".edit-price").val());

        if (newName === "" || newPrice <= 0) {
            alert("Name can not be empty and price must be more than 0");
            return;
        }

        drinks[index].name = newName;
        drinks[index].category = newCategory;
        drinks[index].price = newPrice;
        editIndex = -1;
        renderTable();
    });

    $("#drinksTableBody").on("click", ".cancel-btn", function () {
        editIndex = -1;
        renderTable();
    });

    $("#drinksTableBody").on("click", ".delete-btn", function () {
        let index = $(this).data("index");
        let row = $(this).closest("tr");

        if (confirm("Are you sure you want to delete " + drinks[index].name + "?")) {
            row.fadeOut(400, function () {
                drinks.splice(index, 1);
                editIndex = -1;
                renderTable();
            });
        }
    });

    if ($("#drinksTableBody").length > 0) {
        renderTable();
    }

});
