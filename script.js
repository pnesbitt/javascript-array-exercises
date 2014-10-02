var friendList = ["Alex", "Josh", "Steven"];

window.onload = function() {
    for(var i = 0; i < friendList.length; i++)
    {
        var listElement = "<li id='index" + i + "'>" + friendList[i] + " <button class='unfriend' value='" + i + "'>Unfriend</button></li>";
        $("#friendList").append(listElement);
    }

    $(".unfriend").on('click', function() {
        var index = this.value;
        friendList.splice(index, 1);
        removeFriend(index);
    });
};

var addFriend = function(name) {
    var listElement = "<li id='index" + (friendList.length - 1) + "'>" + friendList[friendList.length - 1] + " <button class='unfriend' value='" + (friendList.length - 1) + "'>Unfriend</button></li>";
    $("#friendList").append(listElement);
};

var removeFriend = function(index) {
    $("#index" + index).remove();
};

$("#submitFriend").on('click', function() {
    var name = $("#friendName").val();
    friendList.push(name);
    addFriend(name);
    
    $(".unfriend").on('click', function() {
        var index = this.value;
        friendList.splice(index, 1);
        removeFriend(index);
    });
});