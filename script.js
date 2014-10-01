var friendList = [];

var updateList = function() {
    var listElement = "<li>" + friendList[friendList.length - 1] + "</li>";
    $("#friendList").append(listElement);
}

$(".submitFriend").on('click', function() {
    var name = $(".friendName").val();
    friendList.push(name);
    updateList();
});
