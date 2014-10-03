var friendList = ["Alex", "Josh", "Steven", "Chris"];

window.onload = function() {
    for(var i = 0; i < friendList.length; i++)
    {
        var listElement = "<li id='index" + i + "'>" + friendList[i] + " <button class='unfriend' value='" + i + "'>Unfriend</button></li>";
        $("#friendList").append(listElement);
    }
};

var addFriend = function(name) {
    var listElement = "<li id='index" + (friendList.length - 1) + "'>" + friendList[friendList.length - 1] + " <button class='unfriend' value='" + (friendList.length - 1) + "'>Unfriend</button></li>";
    $("#friendList").append(listElement);
};

var removeFriend = function(index) {
    $("#index" + index).remove();
};

$("#submitFriend").on('click', function() {
    var friendName = $.trim($("#friendName").val());
    if(friendName.length !== 0) {
        friendList.push(friendName);
        addFriend(friendName);
    }
});

$("#friendList").delegate(".unfriend", "click", function() {
        var index = this.value;
        friendList.splice(index, 1);
        removeFriend(index);
});