
function showUserDetails(userName, userId, userType, createdBy, lastAccessedTime, contactNo, emailId) {
document.getElementById("modalUserName").innerText = userName;
document.getElementById("modalUserId").innerText = userId;
document.getElementById("modalUserType").innerText = userType;
document.getElementById("modalCreatedBy").innerText = createdBy;
document.getElementById("modalLastAccessedTime").innerText = lastAccessedTime;
document.getElementById("modalContactNo").innerText = contactNo;
document.getElementById("modalEmailId").innerText = emailId;
document.getElementById("userModal").style.display = "block";
}

function closeModal() {
document.getElementById("userModal").style.display = "none";
}
