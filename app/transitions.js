export default function(){
  this.transition(
    this.fromRoute('rants.index'),
    this.toRoute('rants.new'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
