import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'alert-component',
  styleUrl: 'alert-component.css',
  shadow: true
})
export class AlertComponent {
  @Prop() text: string;

  render() {
    return (
      <section>
        <b>Alert: {this.text}</b>
      </section>
    );
  }
}
