export default function(){
  this.transition(
    this.fromRoute('rants.index'),
    this.toRoute('users.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
