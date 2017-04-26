import { Component } from '@angular/core'

@Component({
	selector: 'events-list',
	templateUrl: 'app/events/events-list.html'
}) 
export class EventsListComponent {
		event = {
			id: 1,
			name: 'Angular Connect',
			date: '8/5/1992',
			price: 'FREE'
		}
}