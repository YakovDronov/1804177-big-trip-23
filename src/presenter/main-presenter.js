import {render, RenderPosition} from '../render.js';
import SortingsView from '../view/sortings-view.js';
import EditFormView from '../view/edit-form-view.js';
import WaypointView from '../view/waypoint-view.js';
import EventListView from '../view/event-list-view.js';

export default class MainPresenter {
  eventListComponent = new EventListView();

  constructor({container, pointModel}) {
    this.container = container;
    this.pointModel = pointModel;
  }

  init() {
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();
    const offers = this.pointModel.getOffers();
    render(new SortingsView(), this.container);
    render(this.eventListComponent, this.container);
    points.forEach((point, index) => {
      if (index === 0) {
        render(new EditFormView(point, destinations, offers), this.eventListComponent.getElement(), RenderPosition.AFTERBEGIN);
      } else {
        render(new WaypointView(point, destinations, offers), this.eventListComponent.getElement(), RenderPosition.BEFOREEND);
      }
    });
  }
}
