function spread(count) {
  var checkbox = document.getElementById('folder-checkbox-' + count);
  var icon = document.getElementById('spread-icon-' + count);
  checkbox.checked = !checkbox.checked;
  icon.innerHTML = icon.innerHTML === 'arrow_right' ? 'arrow_drop_down' : 'arrow_right';
}
