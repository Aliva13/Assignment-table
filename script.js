var viewButtons = document.getElementsByClassName('fa fa-eye');
var userModal = document.getElementById('userModal');
var closeButton = document.getElementById('closeButton');

for (var i = 0; i < viewButtons.length; i++) {
  viewButtons[i].addEventListener('click', function() {
    var row = this.parentNode.parentNode;
    var userName = row.cells[0].textContent;
    var userType = row.cells[1].textContent;
    var lastAccessedTime = row.cells[2].textContent;
    var userId = '744';
    var createdBy = 'Aliva Mishra';
    var contactNo = '6370152655'; 
    var emailId = 'alivamishra86@gmail.com'; 

    document.getElementById('modalUserName').textContent = userName;
    document.getElementById('modalUserType').textContent = userType;
    document.getElementById('modalLastAccessedTime').textContent = lastAccessedTime;
    document.getElementById('modalUserId').textContent =userId;
    document.getElementById('modalCreatedBy').textContent = createdBy;
    document.getElementById('modalContactNo').textContent = contactNo;
    document.getElementById('modalEmailId').textContent = emailId;

    userModal.style.display = 'block';
  });
}

closeButton.addEventListener('click', function() {
  userModal.style.display = 'none';
});
