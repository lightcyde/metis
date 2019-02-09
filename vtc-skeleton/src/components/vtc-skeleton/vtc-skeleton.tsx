import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vtc-skeleton',
  styleUrl: 'vtc-skeleton.css',
  shadow: true
})
export class VtcSkeleton {
  /**
   * The width of the skeleton element
   */
  @Prop() width: string = '100%';

  /**
   * The height of the skeleton element
   */
  @Prop() height: string = '15px';

  /**
   * Enables or disables animation of the skeleton element
   */
  @Prop() animated: boolean = false;

  render() {
    return <div class={ this.animated ? 'animated' : '' } style={ { width: this.width, height: this.height } }/>;
  }
}
